import React, { useLayoutEffect, useRef, useCallback } from 'react';
import Lenis from 'lenis';
import './ScrollStack.css';

export interface ScrollStackItemProps {
  children: React.ReactNode;
  itemClassName?: string;
}

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({
  children,
  itemClassName = '',
}) => (
  <div className={`scroll-stack-card ${itemClassName}`.trim()}>
    {children}
  </div>
);

export interface ScrollStackProps {
  children: React.ReactNode;
  className?: string;
  itemDistance?: number;
  itemScale?: number;
  itemStackDistance?: number;
  stackPosition?: string;
  scaleEndPosition?: string;
  baseScale?: number;
  scaleDuration?: number;
  rotationAmount?: number;
  blurAmount?: number;
  useWindowScroll?: boolean;
  onStackComplete?: () => void;
}

const ScrollStack: React.FC<ScrollStackProps> = ({
  children,
  className = '',
  itemDistance = 40,
  itemScale = 0.03,
  itemStackDistance = 0,
  stackPosition = '12%',
  scaleEndPosition = '7%',
  baseScale = 0.94,
  rotationAmount = 0,
  blurAmount = 0,
  useWindowScroll = true,
  onStackComplete,
}) => {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const lenisRef = useRef<Lenis | null>(null);

  const cardsRef = useRef<HTMLElement[]>([]);
  const initialTopsRef = useRef<number[]>([]);
  const lastTransformsRef = useRef(new Map());

  const calculateProgress = useCallback(
    (scrollTop: number, start: number, end: number) => {
      if (scrollTop <= start) return 0;
      if (scrollTop >= end) return 1;
      return (scrollTop - start) / (end - start);
    },
    []
  );

  const parsePercentage = useCallback(
    (value: string | number, containerHeight: number) => {
      if (typeof value === 'string' && value.includes('%')) {
        return (parseFloat(value) / 100) * containerHeight;
      }

      return typeof value === 'number'
        ? value
        : parseFloat(value);
    },
    []
  );

  const getScrollData = useCallback(() => {
    if (useWindowScroll) {
      return {
        scrollTop: window.scrollY,
        containerHeight: window.innerHeight,
      };
    }

    const scroller = scrollerRef.current;

    return {
      scrollTop: scroller ? scroller.scrollTop : 0,
      containerHeight: scroller ? scroller.clientHeight : 0,
    };
  }, [useWindowScroll]);

  const updateCardTransforms = useCallback(() => {
    if (!cardsRef.current.length) return;

    const {
      scrollTop,
      containerHeight,
    } = getScrollData();

    const stackPositionPx = parsePercentage(
      stackPosition,
      containerHeight
    );

    const scaleEndPositionPx = parsePercentage(
      scaleEndPosition,
      containerHeight
    );

    cardsRef.current.forEach((card, i) => {
      if (!card) return;

      const cardTop = initialTopsRef.current[i] || 0;

      /*
       * Each card gets its own trigger point.
       *
       * When the card reaches the stack position,
       * it stays there while later cards slide over it.
       */
      const triggerStart =
        cardTop -
        stackPositionPx -
        itemStackDistance * i;

      const triggerEnd =
        cardTop -
        scaleEndPositionPx;

      const progress = calculateProgress(
        scrollTop,
        triggerStart,
        triggerEnd
      );

      /*
       * Before reaching the stack:
       * keep card in normal document position.
       *
       * After reaching the stack:
       * pin it at the stack position.
       */
      let translateY = 0;

      if (scrollTop >= triggerStart) {
        translateY =
          scrollTop -
          cardTop +
          stackPositionPx +
          itemStackDistance * i;
      }

      /*
       * Slight scale effect as cards move into the stack.
       */
      const targetScale =
        baseScale + i * itemScale;

      const scale =
        1 -
        progress *
          (1 - targetScale);

      const rotation = rotationAmount
        ? i * rotationAmount * progress
        : 0;

      /*
       * Optional blur for cards deeper in stack.
       */
      let blur = 0;

      if (blurAmount) {
        let topCardIndex = 0;

        for (
          let j = 0;
          j < cardsRef.current.length;
          j++
        ) {
          const jCardTop =
            initialTopsRef.current[j] || 0;

          const jTriggerStart =
            jCardTop -
            stackPositionPx -
            itemStackDistance * j;

          if (scrollTop >= jTriggerStart) {
            topCardIndex = j;
          }
        }

        if (i < topCardIndex) {
          const depth =
            topCardIndex - i;

          blur = Math.max(
            0,
            depth * blurAmount
          );
        }
      }

      const newTransform = {
        translateY:
          Math.round(translateY * 100) / 100,

        scale:
          Math.round(scale * 1000) / 1000,

        rotation:
          Math.round(rotation * 100) / 100,

        blur:
          Math.round(blur * 100) / 100,
      };

      const previous =
        lastTransformsRef.current.get(i);

      const changed =
        !previous ||
        Math.abs(
          previous.translateY -
            newTransform.translateY
        ) > 0.1 ||
        Math.abs(
          previous.scale -
            newTransform.scale
        ) > 0.001 ||
        Math.abs(
          previous.rotation -
            newTransform.rotation
        ) > 0.1 ||
        Math.abs(
          previous.blur -
            newTransform.blur
        ) > 0.1;

      if (changed) {
        card.style.transform =
          `translate3d(0, ${newTransform.translateY}px, 0) ` +
          `scale(${newTransform.scale}) ` +
          `rotate(${newTransform.rotation}deg)`;

        card.style.filter =
          newTransform.blur > 0
            ? `blur(${newTransform.blur}px)`
            : '';

        lastTransformsRef.current.set(
          i,
          newTransform
        );
      }

      /*
       * Later cards always have higher z-index,
       * so they slide OVER earlier cards.
       */
      card.style.zIndex = `${i + 1}`;
    });

    /*
     * Notify when the final card reaches the stack.
     */
    const lastIndex =
      cardsRef.current.length - 1;

    if (lastIndex >= 0) {
      const lastCardTop =
        initialTopsRef.current[lastIndex] || 0;

      const lastTrigger =
        lastCardTop -
        stackPositionPx -
        itemStackDistance * lastIndex;

      if (
        scrollTop >= lastTrigger &&
        onStackComplete
      ) {
        onStackComplete();
      }
    }
  }, [
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    baseScale,
    rotationAmount,
    blurAmount,
    calculateProgress,
    parsePercentage,
    getScrollData,
    onStackComplete,
  ]);

  const handleScroll = useCallback(() => {
    updateCardTransforms();
  }, [updateCardTransforms]);

  const setupLenis = useCallback(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) =>
        Math.min(
          1,
          1.001 - Math.pow(2, -10 * t)
        ),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    lenis.on('scroll', handleScroll);

    const raf = (time: number) => {
      lenis.raf(time);

      animationFrameRef.current =
        requestAnimationFrame(raf);
    };

    animationFrameRef.current =
      requestAnimationFrame(raf);

    lenisRef.current = lenis;

    return lenis;
  }, [handleScroll]);

  useLayoutEffect(() => {
    const cards = Array.from(
      document.querySelectorAll(
        '.scroll-stack-card'
      )
    ) as HTMLElement[];

    cardsRef.current = cards;

    /*
     * Record the original position of every card
     * before applying transforms.
     */
    initialTopsRef.current =
      cards.map((card) => {
        const rect =
          card.getBoundingClientRect();

        return (
          rect.top +
          window.scrollY
        );
      });

    cards.forEach((card, i) => {
  card.style.zIndex = `${i + 1}`;

  if (i < cards.length - 1) {
    card.style.marginBottom = `${itemDistance}px`;
  } else {
    card.style.marginBottom = '0px';
  }

  card.style.willChange = 'transform, filter';
  card.style.transformOrigin = 'top center';
  card.style.backfaceVisibility = 'hidden';
  card.style.transform = 'translateZ(0)';
  card.style.perspective = '1000px';
});

    setupLenis();

    updateCardTransforms();

    const handleResize = () => {
      /*
       * Recalculate natural card positions
       * after browser resizing.
       */
      initialTopsRef.current =
        cards.map((card) => {
          const rect =
            card.getBoundingClientRect();

          return (
            rect.top +
            window.scrollY
          );
        });

      lastTransformsRef.current.clear();

      updateCardTransforms();
    };

    window.addEventListener(
      'resize',
      handleResize
    );

    return () => {
      window.removeEventListener(
        'resize',
        handleResize
      );

      if (
        animationFrameRef.current
      ) {
        cancelAnimationFrame(
          animationFrameRef.current
        );
      }

      if (lenisRef.current) {
        lenisRef.current.destroy();
      }

      cardsRef.current = [];
      initialTopsRef.current = [];
      lastTransformsRef.current.clear();
    };
  }, [
    itemDistance,
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    baseScale,
    rotationAmount,
    blurAmount,
    useWindowScroll,
    setupLenis,
    updateCardTransforms,
  ]);

  return (
    <div
      className={`scroll-stack-scroller ${className}`.trim()}
      ref={scrollerRef}
    >
      <div className="scroll-stack-inner">
        {children}
      </div>
    </div>
  );
};

export default ScrollStack;
