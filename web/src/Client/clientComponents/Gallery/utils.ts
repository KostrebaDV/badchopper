import {GalleryItems, GalleryOptions} from './types';
import {isNullOrUndefined} from '../../../utils';

type GlobalType = {
    widthShift: number[];
    galleryInterval: number[];
    options: any;
    galleryTimeout: number;
    yOffset: number;
    infiniteGalleryContainerWidth: number;
    prevActiveIndex: number | undefined;
    nextActiveIndex: number | undefined;
};

const GLOBAL: GlobalType = {
    galleryInterval: [],
    options: {},
    galleryTimeout: 0,
    infiniteGalleryContainerWidth: 0,
    widthShift: [],
    prevActiveIndex: undefined,
    nextActiveIndex: undefined,
    yOffset: 0
};

const elements = () => {
    const {galleryName} = GLOBAL.options;

    return {
        galleryContainer: document.getElementsByClassName(galleryName),
        galleryItems: document.getElementsByClassName(`${galleryName}-item`)
    };
};

const _getGallery = (items) => {
    const {galleryName, galleryItemTemplate} = GLOBAL.options;
    const itemsElements = [];

    items.forEach((item, index) => {
        const itemElement = galleryItemTemplate({
                item,
                index: index + 1
            },
            galleryName
        );

        // @ts-ignore
        itemsElements.push(itemElement);
    });

    return itemsElements.join(' ');
};

const _getSliderElement = (index) => {
    return document.getElementsByClassName(`index-${index}`);
};

const _setActiveElement = (index) => {
    const activeItem = document.getElementsByClassName(`index-${index}`);

    if (activeItem.length !== 0) {
        activeItem[0].classList.add("item__active");
    }
};

const _removeActiveElement = (index) => {
    const activeItem = document.getElementsByClassName(`index-${index}`);

    if (activeItem.length !== 0) {
        activeItem[0].classList.remove("item__active");
    }
};

const _initTouchEvents = (setActiveIndex) => {
    const {galleryItems} = elements();
    let touch_start_x;
    let touch_end_x;

    // @ts-ignore
    [...galleryItems].forEach(item => {
        item.addEventListener('touchstart', function(e) {
            touch_start_x = e.changedTouches[e.changedTouches.length - 1].clientX;

            _clearGalleryInterval();
        });
        item.addEventListener('touchend', function(e) {
            touch_end_x = e.changedTouches[e.changedTouches.length - 1].clientX;

            _initInterval(setActiveIndex, +e.srcElement.dataset.index);

            _handleTouchEvent(
                touch_start_x,
                touch_end_x,
                e.view.pageYOffset,
                e.srcElement.dataset.index,
                setActiveIndex,
                galleryItems.length
            );
        });
    });
};

const _normalizedIndex = (isNext, itemIndex, itemsCount) => {
    const index = +itemIndex;
    let normalizedIndex;

    if (isNext) {
        normalizedIndex = index === itemsCount ? 1 : index + 1;
    } else {
        normalizedIndex = index === 1 ? itemsCount : index - 1;
    }

    return normalizedIndex;
};

const _handleTouchEvent = (startCord, endCord, yOffset, itemIndex, setActiveIndex, itemsCount) => {
    if (startCord === endCord || yOffset !== GLOBAL.yOffset) {
        GLOBAL.yOffset = yOffset;
        return;
    }

    if (startCord > endCord) {
        const normalizedIndex = _normalizedIndex(true, itemIndex, itemsCount);

        _removeActiveElement(+itemIndex);
        _setActiveElement(normalizedIndex);
        _setInfiniteScrollActiveItem(normalizedIndex);

        setActiveIndex(normalizedIndex);
    } else {
        const normalizedIndex = _normalizedIndex(false, itemIndex, itemsCount);

        _removeActiveElement(+itemIndex);
        _setActiveElement(normalizedIndex);
        _setInfiniteScrollActiveItem(normalizedIndex);

        setActiveIndex(normalizedIndex);
    }


};

const _initInterval = (setActiveIndex, activeItemIndex = 1) => {
    if (isNullOrUndefined(GLOBAL.options.autoPlaytime)) return;
    const {galleryItems} = elements();

    let i = activeItemIndex;
    const itemsCount = galleryItems.length;

    const interval = setInterval(() => {
        handleNext({
            index: i,
            setActiveIndex: setActiveIndex,
            clearGalleryInterval: false
        });

        i = i === itemsCount ? 1 : i + 1;
    }, GLOBAL.options.autoPlaytime);

    // @ts-ignore
    GLOBAL.galleryInterval.push(interval);
};

const _handleInterval = ({clearGalleryInterval, setActiveIndex, index }) => {
    if (clearGalleryInterval) {
        _clearGalleryInterval();

        // @ts-ignore
        clearTimeout(GLOBAL.galleryTimeout);

        // @ts-ignore
        GLOBAL.galleryTimeout = setTimeout(() => {
            _initInterval(setActiveIndex, index);

        }, GLOBAL.options.autoPlaytime);
    }
};

const _clearGalleryInterval = () => {
    GLOBAL.galleryInterval.forEach(id => clearInterval(id));

    GLOBAL.galleryInterval.splice(0, GLOBAL.galleryInterval.length);
};

const _setInfiniteScrollActiveItem = (index) => {
     const {galleryContainer, galleryItems} = elements();

    _setActiveElement(index);

    if (GLOBAL.prevActiveIndex !== undefined && GLOBAL.nextActiveIndex !== undefined) {
        const prevElement = _getSliderElement(GLOBAL.prevActiveIndex);
        const nextElement = _getSliderElement(GLOBAL.nextActiveIndex);

        if (prevElement[0]  !== undefined && nextElement[0]  !== undefined) {
            prevElement[0].classList.remove("item__active-prev");
            nextElement[0].classList.remove("item__active-next");
        }
    }

    const prevIndex = index - 1 === 0 ? galleryItems.length : index - 1;
    const nextIndex = index === galleryItems.length ? 1 : index + 1;

    const prevElement = _getSliderElement(prevIndex);
    const nextElement = _getSliderElement(nextIndex);

    if (prevElement[0]  !== undefined && nextElement[0]  !== undefined) {
        prevElement[0].classList.add("item__active-prev");
        nextElement[0].classList.add("item__active-next");
    }

    if (GLOBAL.options.allowDuplicateContainer) {
        const galleryDuplicateContainer = document.getElementsByClassName('galleryDuplicateContainer');

        // @ts-ignore
        galleryDuplicateContainer[0].innerHTML = `
            <div class="galleryDuplicateContainer__item">
                ${prevElement[0].innerHTML}
            </div>
            <div class="galleryDuplicateContainer__item">
                ${nextElement[0].innerHTML}
            </div>
        `;
    }

    //@ts-ignore
    galleryContainer[0].style.transform = `translate3d(-${GLOBAL.widthShift[index]}px, 0px, 0px)`;
    //@ts-ignore
    galleryContainer[0].style.webkitTransform = `translate3d(-${GLOBAL.widthShift[index]}px, 0px, 0px)`;
    //@ts-ignore
    galleryContainer[0].style.msTransform = `translate3d(-${GLOBAL.widthShift[index]}px, 0px, 0px)`;

    GLOBAL.prevActiveIndex = prevIndex;
    GLOBAL.nextActiveIndex = nextIndex;
};

const _initInfiniteScrollTranslateParams = () => {
    const {galleryItems} = elements();

    GLOBAL.widthShift = [0];

    let i = 0;
    const totalItems = galleryItems.length;

    setTimeout(() => {
        const itemWidth = galleryItems[1].clientWidth;

        for (i; i < totalItems;) {
            GLOBAL.widthShift.push(itemWidth * i);

            i++;
        }

        _setInfiniteScrollActiveItem(GLOBAL.options.activeElement);
    }, 300)
};

const _initInfiniteScroll = () => {
    const {galleryContainer, galleryItems} = elements();

    const itemWidth = galleryItems[0].clientWidth;

    GLOBAL.infiniteGalleryContainerWidth = itemWidth * galleryItems.length;
    //@ts-ignore
    galleryContainer[0].style.width = `${GLOBAL.infiniteGalleryContainerWidth}px`;
    //@ts-ignore
    galleryContainer[0].style.transition = 'transform 0.5s';

};

export const handlePrev = ({index, setActiveIndex, clearGalleryInterval}) => {
    setActiveIndex(index);
    _handleInterval({index, setActiveIndex, clearGalleryInterval});

    const {galleryItems} = elements();

    // @ts-ignore
    [...galleryItems].forEach((item, index) => {
       _removeActiveElement(index + 1);
    });

    if (GLOBAL.options.infiniteScroll) {
        _setInfiniteScrollActiveItem(index);
    } else {
        _setActiveElement(index);
    }
};

export const handleNext = ({index, setActiveIndex, clearGalleryInterval}) => {
    setActiveIndex(index);
    _handleInterval({index, setActiveIndex, clearGalleryInterval});

    const {galleryItems} = elements();

    // @ts-ignore
    [...galleryItems].forEach((item, index) => {
        _removeActiveElement(index + 1);
    });

    if (GLOBAL.options.infiniteScroll) {
        _setInfiniteScrollActiveItem(index);
    } else {
        _setActiveElement(index);
    }

    //manage transform here
};

export const initGallery = (
    items: GalleryItems,
    options: GalleryOptions,
    setActiveIndex
) => {
    GLOBAL.options = options;
    const {galleryContainer} = elements();
    const galleryLayout = _getGallery(items);

    if (galleryLayout.length !== 0) {
        // @ts-ignore
        galleryContainer[0].innerHTML = galleryLayout;
    }

    if (galleryLayout.length !== 0 && options.infiniteScroll) {
        _initInfiniteScroll();
        _initInfiniteScrollTranslateParams();
    } else {
        _setActiveElement(options.activeElement);
    }

    _initTouchEvents(setActiveIndex);
    _initInterval(setActiveIndex);
};

export const destroyGallery = () => {
    _clearGalleryInterval();
};
