import { ReactNode } from "react";

interface ItemListProps<T> {
    items: T[];
    renderItem: (item: T, index: number) => ReactNode;
    keyExtractor: (item: T) => string | number;
    className?: string;
    emptyMessage?: string;
}

const ItemList = <T,>({
    items,
    renderItem,
    keyExtractor,
    className = "",
    emptyMessage = "Список пуст",
}: ItemListProps<T>): React.ReactElement => {
    if (items.length === 0) {
        return <div className={className}>{emptyMessage}</div>;
    }

    return (
        <div className={className}>
            {items.map((item, index) => (
                <div key={keyExtractor(item)}>{renderItem(item, index)}</div>
            ))}
        </div>
    );
};

export default ItemList;