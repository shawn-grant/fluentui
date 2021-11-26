import * as React from 'react';
import { makeStyles, shorthands } from '@fluentui/react-make-styles';

import { Portal } from '../Portal';

const useStyles = makeStyles({
  container: theme => ({
    ...shorthands.border('3px', 'solid', theme.colorPaletteRedBackground3),
    ...shorthands.padding('10px'),
  }),

  portalContent: theme => ({
    backgroundColor: theme.colorPaletteYellowBackground3,
    ...shorthands.border('3px', 'dashed'),
    marginTop: '10px',
  }),
});

const Container: React.FC = ({ children }) => {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      Portal nested within
      {children}
    </div>
  );
};

const ExamplePortalContent: React.FC = ({ children }) => {
  const styles = useStyles();

  return <div className={styles.portalContent}>{children}</div>;
};

export const Nested = () => {
  return (
    <Container>
      <Container>
        <Portal>
          <ExamplePortalContent>Outer portal</ExamplePortalContent>
          <Portal>
            <ExamplePortalContent>Inner portal</ExamplePortalContent>
          </Portal>
        </Portal>
      </Container>
    </Container>
  );
};
