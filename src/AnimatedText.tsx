import { useEffect } from "react";
import styled from "styled-components";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const CharactersWrapper = styled(motion.span)`
  display: inline-block;
  margin-right: 0.25em;
  white-space: nowrap;
`;

const Character = styled(motion.span)`
  display: inline-block;
  margin-right: -0.05em;
`;

const AnimatedTitle = (props: { text: string }) => {
  const text = props.text;
  const ctrls = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    ctrls.start(inView ? "visible" : "hidden");
  }, [ctrls, inView]);

  const characterAnimationWrapper = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.07,
      },
    },
  };

  const characterAnimation = {
    hidden: {
      opacity: 0,
      y: `0.25em`,
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  return (
    <CharactersWrapper
      variants={characterAnimationWrapper}
      ref={ref}
      initial="hidden"
      animate={ctrls}
    >
      {text.split("").map((character, index) => (
        <Character aria-hidden="true" key={index} variants={characterAnimation}>
          {character}
        </Character>
      ))}
    </CharactersWrapper>
  );
};

export default AnimatedTitle;
