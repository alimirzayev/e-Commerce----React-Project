import JSONDATA from './components/Main/Search.json'

const initalState = {
    data: JSONDATA,
    dynamicData: JSONDATA,
    wishlistData: [],
    blur: false,
    toggle: false,
}

export default function Reducer(state = initalState, action) {
    switch (action.type) {
        case "SortingTitle":
            let NewJsonData = state.data.slice().sort((item1, item2) => item1.title.localeCompare(item2.title))
            return { ...state, dynamicData: NewJsonData }
            break;

        case "SortingTitleDes":
            let NewJsonData2 = state.data.slice().sort((item1, item2) => item2.title.localeCompare(item1.title))
            return { ...state, dynamicData: NewJsonData2 }
            break;

        case "SortingPrice":
            let NewJsonData3 = state.data.slice().sort((item1, item2) => item1.price - item2.price)
            return { ...state, dynamicData: NewJsonData3 }
            break

        case "SortingPriceDes":
            let NewJsonData4 = state.data.slice().sort((item1, item2) => item2.price - item1.price)
            return { ...state, dynamicData: NewJsonData4 }
            break

        case "SortingID":
            let NewJsonData5 = state.data.slice().sort((item1, item2) => item2.id - item1.id)
            return { ...state, dynamicData: NewJsonData5 }
            break

        case "Rating5":
            let NewJsonData6 = state.data.filter((val) => val.rating === 5 || val.rating === 4.5);
            return { ...state, dynamicData: NewJsonData6 }
            break

        case "Rating4":
            let NewJsonData7 = state.data.filter((val) => val.rating === 4 || val.rating === 3.5);
            return { ...state, dynamicData: NewJsonData7 }
            break

        case "Rating3":
            let NewJsonData8 = state.data.filter((val) => val.rating === 3 || val.rating === 2.5);
            return { ...state, dynamicData: NewJsonData8 }
            break

        case "Rating2":
            let NewJsonData9 = state.data.filter((val) => val.rating === 2 || val.rating === 1.5);
            return { ...state, dynamicData: NewJsonData9 }
            break

        case "Rating1":
            let NewJsonData10 = state.data.filter((val) => val.rating === 1 || val.rating === 0.5);
            return { ...state, dynamicData: NewJsonData10 }
            break

        case "PriceBetween":
            let NewJsonData11 = state.data.filter((val) => val.price > action.value[0] && val.price < action.value[1]);
            return { ...state, dynamicData: NewJsonData11 }
            break

        case "Wishlist":
            return { ...state, wishlistData: action.action }
            break

        case "BLUR":
            return { ...state, blur: action.value }
            break

        case "OPENMENU":
            console.log(action.value);
            return { ...state, toggle: action.value }
            break
    }
    return state
}