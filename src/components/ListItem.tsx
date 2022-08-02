import { FC } from "react";

interface IProps{
    num : number
}


const ListItem : FC<IProps> = ({num}) => {
    return (
        <span>{num}</span>
    );
};

export default ListItem;