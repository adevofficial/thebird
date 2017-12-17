import React from 'react';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

const styles = (theme) => {
    return {
        root: {
            background: "none",
            border: "1px solid " + theme.palette.primary['500'],
            color: theme.palette.primary['500'],
            boxShadow: 'none',
            borderRadius: "45px",
            minHeight: '28px',
            height: '27px',
            padding: '0px',
            fontWeight: "bold",
        },
        label: {
            textTransform: 'capitalize',
        },
    };
};

export default withStyles(styles)((props) => {
    // console.log(props.classes.root);
    return (
        <Button
            classes={{
                root: props.classes.root, // className, e.g. `OverridesClasses-root-X`
                label: props.classes.label, // className, e.g. `OverridesClasses-label-X`
            }}
        >
            {props.children ? props.children : ''}
        </Button>
    );
});