import React from "react";

const HeaderItems = (props) => {
    const { name, Icon } = props;
    return (
        <div className="flex items-center gap-2 font-semibold cursor-pointer hover:underline underline-offset-8">
            <Icon />
            <h2>{name}</h2>
        </div>
    );
};

export default HeaderItems;
