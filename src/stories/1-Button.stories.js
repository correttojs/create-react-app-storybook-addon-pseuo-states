import React from "react";
import {
  AttributesStatesDefault,
  PseudoStatesDefault,
  withPseudo,
} from "@ergosign/storybook-addon-pseudo-states-react";
import { SimpleButton } from "../SimpleButton/simple-button";
import { SimpleButton__withoutCssModules } from "../SimpleButtonWithoutCssModules/simple-button";
import { boolean } from "@storybook/addon-knobs";

export default {
  title: "Button",
  decorators: [withPseudo],
  parameters: {
    withPseudo: {
      pseudos: [...PseudoStatesDefault, "focus & hover"],
      // attributes: [...AttributesStatesDefault, {name:'isBig', value: 'really big'}],
    },
  },
};

export const simpleButton = () => (
  <SimpleButton label={"ButtonLabel"} rounded={boolean("rounded", false)} />
);

export const simpleButton__withoutCssModules = () => (
  <SimpleButton__withoutCssModules label={"ButtonLabel"} />
);

// export const text = () => <Button onClick={action('clicked')}>Hello Button</Button>;
//
// export const emoji = () => (
//     <Button onClick={action('clicked')}>
//     <span role="img"
//           aria-label="so cool">
//       😀 😎 👍 💯
//     </span>
//     </Button>
// );

/*
storiesOf('Buttons', module)
    .addDecorator(withPseudo)
    .add('Button', () => (
        <Button onClick={action('clicked')}>
                 <span role="img"
                       aria-label="so cool">
                   😀 😎 👍 💯
                 </span>
        </Button>
    ));
*/
