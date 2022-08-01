import { FC } from "react";

interface IProps{
    num : number
}


const ListItem : FC<IProps> = ({num}) => {
    return (
        <div>{num}</div>
    );
};

export default ListItem;