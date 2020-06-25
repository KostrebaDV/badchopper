import { GAP, COL } from './consts';

const getBaseGridModel = (gridColumn) => {
	const baseGridModel: string[] = [];

	//eslint-disable-next-line
	for (let i = 0; gridColumn > i; i++) {
		baseGridModel.push('1fr');
	}

	return baseGridModel.join(' ');
};

export const getGridItems = grid => {
	const hasGap = dimension => dimension.split('_').length > 1;
	const getGap = gridProps => gridProps.split('_')[1];

    if (grid.length > 0) {
        return grid.split('-').reduce((propsObj, gridProps) => {
            if (hasGap(gridProps)) {
                propsObj.push({
                    gap: Number(getGap(gridProps)),
                });
            } else {
                propsObj.push({
                    col: Number(gridProps),
                });
            }
            return propsObj;
        }, []);
    }
    return [];
};

export const getGridItemsStyles = gridItems => {
    const gridStyles: { gridColumnStart: number; gridColumnEnd: string; }[] = [];
    for (let i = 0, counter = 1; i < gridItems.length; i += 1) {
        if (Object.keys(gridItems[i])[0] === COL) {
            gridStyles.push({
                gridColumnStart: counter,
                gridColumnEnd: counter + gridItems[i].col,
            });
            counter += gridItems[i].col;
        } else if (Object.keys(gridItems[i])[0] === GAP) {
            counter += gridItems[i].gap;
        }
    }
    return gridStyles;
};

export const getBaseGridStyles = (
    {
        gapColumn,
        gridColumn,
        alignItems,
        gridGap
    }
) => {
	const baseGridModel = getBaseGridModel(gridColumn);

    return {
        gridColumnGap: `${gapColumn}em`,
        gridTemplateColumns: baseGridModel,
		alignItems,
        gridGap
    };
};

// export const isValidGrid = (gridItems, gridColumn) => {
//     if (gridItems.length > 0) {
//         return (
//             gridItems.reduce((counter, gridItem) => {
//                 return counter + Number(Object.values(gridItem));
//             }, 0) <= gridColumn
//         );
//     }
//     return false;
// };
