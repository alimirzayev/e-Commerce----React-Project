import JSONDATA from './components/Main/Search.json'

const initalState = {
    data: JSONDATA
}

export default function Reducer(state = initalState, action) {
    switch (action.type) {
        case "SortingTitle":
            let NewJsonData = state.data.slice().sort((item1, item2) => item1.title.localeCompare(item2.title))
            return { ...state, data: NewJsonData }
            break

        case "SortingTitleDes":
            let NewJsonData2 = state.data.slice().sort((item1, item2) => item2.title.localeCompare(item1.title))
            return { ...state, data: NewJsonData2 }
            break

        case "SortingPrice":
            let NewJsonData3 = state.data.slice().sort((item1, item2) => item1.price - item2.price)
            return { ...state, data: NewJsonData3 }
            break

        case "SortingPriceDes":
            let NewJsonData4 = state.data.slice().sort((item1, item2) => item2.price - item1.price)
            return { ...state, data: NewJsonData4 }
            break

        case "SortingID":
            let NewJsonData5 = state.data.slice().sort((item1, item2) => item2.id - item1.id)
            return { ...state, data: NewJsonData5 }
            break
    }
    return state
}