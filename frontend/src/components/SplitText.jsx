import React, { Fragment } from "react";

const _ContainerElement = ({ children }) => <div>{children}</div>;
const _WordElement = ({ children }) => <span>{children}</span>;
const _CharElement = ({ children }) => <span>{children}</span>;
const _SpaceElement = () => <span> </span>;

export default ({
   children = null,
   ContainerElement = _ContainerElement,
   WordElement = _WordElement,
   CharElement = _CharElement,
   SpaceElement = _SpaceElement,
   ...rest
}) => {
   if (!children) return null;

   const words = children.split(" ");

   return (
      <ContainerElement {...rest}>
         {words.map((word, i) => (
            <Fragment key={i}>
               <WordElement i={i}>
                  {word.split("").map((char, j) => (
                     <CharElement key={j} i={j}>
                        {char}
                     </CharElement>
                  ))}
               </WordElement>
               {i !== words.length - 1 && <SpaceElement />}
            </Fragment>
         ))}
      </ContainerElement>
   );
};
