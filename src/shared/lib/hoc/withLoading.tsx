import React from "react";

const withLoading = <P extends object>(Component: React.ComponentType<P>) => {
    return (props: P & { isLoading?: boolean }) => {
        if (props.isLoading) {
            return <div>Загрузка...</div>;
        }

        return <Component {...(props as P)} />;
    };
};

export default withLoading;