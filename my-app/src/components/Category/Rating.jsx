import React, { useState } from 'react'
import { connect } from 'react-redux';

function Review(props) {

    const filteredRating5 = () => {
        props.dispatch({ type: "Rating5", value: "" })
    }

    const filteredRating4 = () => {
        props.dispatch({ type: "Rating4", value: "" })
    }

    const filteredRating3 = () => {
        props.dispatch({ type: "Rating3", value: "" })
    }

    const filteredRating2 = () => {
        props.dispatch({ type: "Rating2", value: "" })
    }

    const filteredRating1 = () => {
        props.dispatch({ type: "Rating1", value: "" })
    }

    return (
        <div className="rating">
            <h2>Rating</h2>

            <div>
                <label >
                    <input onClick={filteredRating5} type="radio" name="same" id="" />
                    <svg width="89" height="16" viewBox="0 0 89 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_25224:39054)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.81945 2.12663C7.8655 1.9806 7.9569 1.85306 8.08038 1.76252C8.20387 1.67198 8.353 1.62317 8.50611 1.62317C8.65923 1.62317 8.80836 1.67198 8.93184 1.76252C9.05533 1.85306 9.14673 1.9806 9.19278 2.12663L10.4328 5.93996H14.4328C14.5914 5.93397 14.7476 5.98006 14.8775 6.07119C15.0074 6.16232 15.104 6.29348 15.1523 6.44464C15.2007 6.5958 15.1983 6.75863 15.1454 6.90827C15.0925 7.0579 14.9921 7.18611 14.8594 7.2733L11.6128 9.62663L12.8528 13.4466C12.9018 13.5921 12.9031 13.7495 12.8563 13.8958C12.8096 14.042 12.7173 14.1695 12.5929 14.2596C12.4686 14.3497 12.3187 14.3977 12.1652 14.3966C12.0116 14.3954 11.8624 14.3452 11.7394 14.2533L8.48611 11.8733L5.23945 14.2333C5.11645 14.3252 4.96729 14.3754 4.81374 14.3766C4.66019 14.3777 4.5103 14.3297 4.38596 14.2396C4.26162 14.1495 4.16933 14.022 4.12259 13.8758C4.07584 13.7295 4.07707 13.5721 4.12611 13.4266L5.36611 9.60663L2.11945 7.2533C1.98684 7.16611 1.88641 7.0379 1.83353 6.88827C1.78064 6.73863 1.77819 6.5758 1.82656 6.42464C1.87493 6.27348 1.97146 6.14232 2.10139 6.05119C2.23133 5.96006 2.38752 5.91397 2.54611 5.91996H6.54611L7.81945 2.12663Z" fill="#FDBC15" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M25.8194 2.12663C25.8655 1.9806 25.9569 1.85306 26.0804 1.76252C26.2039 1.67198 26.353 1.62317 26.5061 1.62317C26.6592 1.62317 26.8084 1.67198 26.9318 1.76252C27.0553 1.85306 27.1467 1.9806 27.1928 2.12663L28.4328 5.93996H32.4328C32.5914 5.93397 32.7476 5.98006 32.8775 6.07119C33.0074 6.16232 33.104 6.29348 33.1523 6.44464C33.2007 6.5958 33.1983 6.75863 33.1454 6.90827C33.0925 7.0579 32.9921 7.18611 32.8594 7.2733L29.6128 9.62663L30.8528 13.4466C30.9018 13.5921 30.9031 13.7495 30.8563 13.8958C30.8096 14.042 30.7173 14.1695 30.5929 14.2596C30.4686 14.3497 30.3187 14.3977 30.1652 14.3966C30.0116 14.3954 29.8624 14.3452 29.7394 14.2533L26.4861 11.8733L23.2394 14.2333C23.1165 14.3252 22.9673 14.3754 22.8137 14.3766C22.6602 14.3777 22.5103 14.3297 22.386 14.2396C22.2616 14.1495 22.1693 14.022 22.1226 13.8758C22.0758 13.7295 22.0771 13.5721 22.1261 13.4266L23.3661 9.60663L20.1194 7.2533C19.9868 7.16611 19.8864 7.0379 19.8335 6.88827C19.7806 6.73863 19.7782 6.5758 19.8266 6.42464C19.8749 6.27348 19.9715 6.14232 20.1014 6.05119C20.2313 5.96006 20.3875 5.91397 20.5461 5.91996H24.5461L25.8194 2.12663Z" fill="#FDBC15" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M43.8194 2.12663C43.8655 1.9806 43.9569 1.85306 44.0804 1.76252C44.2039 1.67198 44.353 1.62317 44.5061 1.62317C44.6592 1.62317 44.8084 1.67198 44.9318 1.76252C45.0553 1.85306 45.1467 1.9806 45.1928 2.12663L46.4328 5.93996H50.4328C50.5914 5.93397 50.7476 5.98006 50.8775 6.07119C51.0074 6.16232 51.104 6.29348 51.1523 6.44464C51.2007 6.5958 51.1983 6.75863 51.1454 6.90827C51.0925 7.0579 50.9921 7.18611 50.8594 7.2733L47.6128 9.62663L48.8528 13.4466C48.9018 13.5921 48.9031 13.7495 48.8563 13.8958C48.8096 14.042 48.7173 14.1695 48.5929 14.2596C48.4686 14.3497 48.3187 14.3977 48.1652 14.3966C48.0116 14.3954 47.8624 14.3452 47.7394 14.2533L44.4861 11.8733L41.2394 14.2333C41.1165 14.3252 40.9673 14.3754 40.8137 14.3766C40.6602 14.3777 40.5103 14.3297 40.386 14.2396C40.2616 14.1495 40.1693 14.022 40.1226 13.8758C40.0758 13.7295 40.0771 13.5721 40.1261 13.4266L41.3661 9.60663L38.1194 7.2533C37.9868 7.16611 37.8864 7.0379 37.8335 6.88827C37.7806 6.73863 37.7782 6.5758 37.8266 6.42464C37.8749 6.27348 37.9715 6.14232 38.1014 6.05119C38.2313 5.96006 38.3875 5.91397 38.5461 5.91996H42.5461L43.8194 2.12663Z" fill="#FDBC15" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M61.8194 2.12663C61.8655 1.9806 61.9569 1.85306 62.0804 1.76252C62.2039 1.67198 62.353 1.62317 62.5061 1.62317C62.6592 1.62317 62.8084 1.67198 62.9318 1.76252C63.0553 1.85306 63.1467 1.9806 63.1928 2.12663L64.4328 5.93996H68.4328C68.5914 5.93397 68.7476 5.98006 68.8775 6.07119C69.0074 6.16232 69.104 6.29348 69.1523 6.44464C69.2007 6.5958 69.1983 6.75863 69.1454 6.90827C69.0925 7.0579 68.9921 7.18611 68.8594 7.2733L65.6128 9.62663L66.8528 13.4466C66.9018 13.5921 66.9031 13.7495 66.8563 13.8958C66.8096 14.042 66.7173 14.1695 66.5929 14.2596C66.4686 14.3497 66.3187 14.3977 66.1652 14.3966C66.0116 14.3954 65.8624 14.3452 65.7394 14.2533L62.4861 11.8733L59.2394 14.2333C59.1165 14.3252 58.9673 14.3754 58.8137 14.3766C58.6602 14.3777 58.5103 14.3297 58.386 14.2396C58.2616 14.1495 58.1693 14.022 58.1226 13.8758C58.0758 13.7295 58.0771 13.5721 58.1261 13.4266L59.3661 9.60663L56.1194 7.2533C55.9868 7.16611 55.8864 7.0379 55.8335 6.88827C55.7806 6.73863 55.7782 6.5758 55.8266 6.42464C55.8749 6.27348 55.9715 6.14232 56.1014 6.05119C56.2313 5.96006 56.3875 5.91397 56.5461 5.91996H60.5461L61.8194 2.12663Z" fill="#FDBC15" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M79.8194 2.12663C79.8655 1.9806 79.9569 1.85306 80.0804 1.76252C80.2039 1.67198 80.353 1.62317 80.5061 1.62317C80.6592 1.62317 80.8084 1.67198 80.9318 1.76252C81.0553 1.85306 81.1467 1.9806 81.1928 2.12663L82.4328 5.93996H86.4328C86.5914 5.93397 86.7476 5.98006 86.8775 6.07119C87.0074 6.16232 87.104 6.29348 87.1523 6.44464C87.2007 6.5958 87.1983 6.75863 87.1454 6.90827C87.0925 7.0579 86.9921 7.18611 86.8594 7.2733L83.6128 9.62663L84.8528 13.4466C84.9018 13.5921 84.9031 13.7495 84.8563 13.8958C84.8096 14.042 84.7173 14.1695 84.5929 14.2596C84.4686 14.3497 84.3187 14.3977 84.1652 14.3966C84.0116 14.3954 83.8624 14.3452 83.7394 14.2533L80.4861 11.8733L77.2394 14.2333C77.1165 14.3252 76.9673 14.3754 76.8137 14.3766C76.6602 14.3777 76.5103 14.3297 76.386 14.2396C76.2616 14.1495 76.1693 14.022 76.1226 13.8758C76.0758 13.7295 76.0771 13.5721 76.1261 13.4266L77.3661 9.60663L74.1194 7.2533C73.9868 7.16611 73.8864 7.0379 73.8335 6.88827C73.7806 6.73863 73.7782 6.5758 73.8266 6.42464C73.8749 6.27348 73.9715 6.14232 74.1014 6.05119C74.2313 5.96006 74.3875 5.91397 74.5461 5.91996H78.5461L79.8194 2.12663Z" fill="#FDBC15" />
                        </g>
                        <defs>
                            <clipPath id="clip0_25224:39054">
                                <rect width="88" height="16" fill="white" transform="translate(0.486328)" />
                            </clipPath>
                        </defs>
                    </svg>
                </label>
            </div>

            <div >
                <label >
                    <input onClick={filteredRating4} type="radio" name="same" id="" />
                    <svg width="89" height="16" viewBox="0 0 89 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_25224:39075)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.81945 2.12663C7.8655 1.9806 7.9569 1.85306 8.08038 1.76252C8.20387 1.67198 8.353 1.62317 8.50611 1.62317C8.65923 1.62317 8.80836 1.67198 8.93184 1.76252C9.05533 1.85306 9.14673 1.9806 9.19278 2.12663L10.4328 5.93996H14.4328C14.5914 5.93397 14.7476 5.98006 14.8775 6.07119C15.0074 6.16232 15.104 6.29348 15.1523 6.44464C15.2007 6.5958 15.1983 6.75863 15.1454 6.90827C15.0925 7.0579 14.9921 7.18611 14.8594 7.2733L11.6128 9.62663L12.8528 13.4466C12.9018 13.5921 12.9031 13.7495 12.8563 13.8958C12.8096 14.042 12.7173 14.1695 12.5929 14.2596C12.4686 14.3497 12.3187 14.3977 12.1652 14.3966C12.0116 14.3954 11.8624 14.3452 11.7394 14.2533L8.48611 11.8733L5.23945 14.2333C5.11645 14.3252 4.96729 14.3754 4.81374 14.3766C4.66019 14.3777 4.5103 14.3297 4.38596 14.2396C4.26162 14.1495 4.16933 14.022 4.12259 13.8758C4.07584 13.7295 4.07707 13.5721 4.12611 13.4266L5.36611 9.60663L2.11945 7.2533C1.98684 7.16611 1.88641 7.0379 1.83353 6.88827C1.78064 6.73863 1.77819 6.5758 1.82656 6.42464C1.87493 6.27348 1.97146 6.14232 2.10139 6.05119C2.23133 5.96006 2.38752 5.91397 2.54611 5.91996H6.54611L7.81945 2.12663Z" fill="#FDBC15" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M25.8194 2.12663C25.8655 1.9806 25.9569 1.85306 26.0804 1.76252C26.2039 1.67198 26.353 1.62317 26.5061 1.62317C26.6592 1.62317 26.8084 1.67198 26.9318 1.76252C27.0553 1.85306 27.1467 1.9806 27.1928 2.12663L28.4328 5.93996H32.4328C32.5914 5.93397 32.7476 5.98006 32.8775 6.07119C33.0074 6.16232 33.104 6.29348 33.1523 6.44464C33.2007 6.5958 33.1983 6.75863 33.1454 6.90827C33.0925 7.0579 32.9921 7.18611 32.8594 7.2733L29.6128 9.62663L30.8528 13.4466C30.9018 13.5921 30.9031 13.7495 30.8563 13.8958C30.8096 14.042 30.7173 14.1695 30.5929 14.2596C30.4686 14.3497 30.3187 14.3977 30.1652 14.3966C30.0116 14.3954 29.8624 14.3452 29.7394 14.2533L26.4861 11.8733L23.2394 14.2333C23.1165 14.3252 22.9673 14.3754 22.8137 14.3766C22.6602 14.3777 22.5103 14.3297 22.386 14.2396C22.2616 14.1495 22.1693 14.022 22.1226 13.8758C22.0758 13.7295 22.0771 13.5721 22.1261 13.4266L23.3661 9.60663L20.1194 7.2533C19.9868 7.16611 19.8864 7.0379 19.8335 6.88827C19.7806 6.73863 19.7782 6.5758 19.8266 6.42464C19.8749 6.27348 19.9715 6.14232 20.1014 6.05119C20.2313 5.96006 20.3875 5.91397 20.5461 5.91996H24.5461L25.8194 2.12663Z" fill="#FDBC15" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M43.8194 2.12663C43.8655 1.9806 43.9569 1.85306 44.0804 1.76252C44.2039 1.67198 44.353 1.62317 44.5061 1.62317C44.6592 1.62317 44.8084 1.67198 44.9318 1.76252C45.0553 1.85306 45.1467 1.9806 45.1928 2.12663L46.4328 5.93996H50.4328C50.5914 5.93397 50.7476 5.98006 50.8775 6.07119C51.0074 6.16232 51.104 6.29348 51.1523 6.44464C51.2007 6.5958 51.1983 6.75863 51.1454 6.90827C51.0925 7.0579 50.9921 7.18611 50.8594 7.2733L47.6128 9.62663L48.8528 13.4466C48.9018 13.5921 48.9031 13.7495 48.8563 13.8958C48.8096 14.042 48.7173 14.1695 48.5929 14.2596C48.4686 14.3497 48.3187 14.3977 48.1652 14.3966C48.0116 14.3954 47.8624 14.3452 47.7394 14.2533L44.4861 11.8733L41.2394 14.2333C41.1165 14.3252 40.9673 14.3754 40.8137 14.3766C40.6602 14.3777 40.5103 14.3297 40.386 14.2396C40.2616 14.1495 40.1693 14.022 40.1226 13.8758C40.0758 13.7295 40.0771 13.5721 40.1261 13.4266L41.3661 9.60663L38.1194 7.2533C37.9868 7.16611 37.8864 7.0379 37.8335 6.88827C37.7806 6.73863 37.7782 6.5758 37.8266 6.42464C37.8749 6.27348 37.9715 6.14232 38.1014 6.05119C38.2313 5.96006 38.3875 5.91397 38.5461 5.91996H42.5461L43.8194 2.12663Z" fill="#FDBC15" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M61.8194 2.12663C61.8655 1.9806 61.9569 1.85306 62.0804 1.76252C62.2039 1.67198 62.353 1.62317 62.5061 1.62317C62.6592 1.62317 62.8084 1.67198 62.9318 1.76252C63.0553 1.85306 63.1467 1.9806 63.1928 2.12663L64.4328 5.93996H68.4328C68.5914 5.93397 68.7476 5.98006 68.8775 6.07119C69.0074 6.16232 69.104 6.29348 69.1523 6.44464C69.2007 6.5958 69.1983 6.75863 69.1454 6.90827C69.0925 7.0579 68.9921 7.18611 68.8594 7.2733L65.6128 9.62663L66.8528 13.4466C66.9018 13.5921 66.9031 13.7495 66.8563 13.8958C66.8096 14.042 66.7173 14.1695 66.5929 14.2596C66.4686 14.3497 66.3187 14.3977 66.1652 14.3966C66.0116 14.3954 65.8624 14.3452 65.7394 14.2533L62.4861 11.8733L59.2394 14.2333C59.1165 14.3252 58.9673 14.3754 58.8137 14.3766C58.6602 14.3777 58.5103 14.3297 58.386 14.2396C58.2616 14.1495 58.1693 14.022 58.1226 13.8758C58.0758 13.7295 58.0771 13.5721 58.1261 13.4266L59.3661 9.60663L56.1194 7.2533C55.9868 7.16611 55.8864 7.0379 55.8335 6.88827C55.7806 6.73863 55.7782 6.5758 55.8266 6.42464C55.8749 6.27348 55.9715 6.14232 56.1014 6.05119C56.2313 5.96006 56.3875 5.91397 56.5461 5.91996H60.5461L61.8194 2.12663Z" fill="#FDBC15" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M79.8194 2.12663C79.8655 1.9806 79.9569 1.85306 80.0804 1.76252C80.2039 1.67198 80.353 1.62317 80.5061 1.62317C80.6592 1.62317 80.8084 1.67198 80.9318 1.76252C81.0553 1.85306 81.1467 1.9806 81.1928 2.12663L82.4328 5.93996H86.4328C86.5914 5.93397 86.7476 5.98006 86.8775 6.07119C87.0074 6.16232 87.104 6.29348 87.1523 6.44464C87.2007 6.5958 87.1983 6.75863 87.1454 6.90827C87.0925 7.0579 86.9921 7.18611 86.8594 7.2733L83.6128 9.62663L84.8528 13.4466C84.9018 13.5921 84.9031 13.7495 84.8563 13.8958C84.8096 14.042 84.7173 14.1695 84.5929 14.2596C84.4686 14.3497 84.3187 14.3977 84.1652 14.3966C84.0116 14.3954 83.8624 14.3452 83.7394 14.2533L80.4861 11.8733L77.2394 14.2333C77.1165 14.3252 76.9673 14.3754 76.8137 14.3766C76.6602 14.3777 76.5103 14.3297 76.386 14.2396C76.2616 14.1495 76.1693 14.022 76.1226 13.8758C76.0758 13.7295 76.0771 13.5721 76.1261 13.4266L77.3661 9.60663L74.1194 7.2533C73.9868 7.16611 73.8864 7.0379 73.8335 6.88827C73.7806 6.73863 73.7782 6.5758 73.8266 6.42464C73.8749 6.27348 73.9715 6.14232 74.1014 6.05119C74.2313 5.96006 74.3875 5.91397 74.5461 5.91996H78.5461L79.8194 2.12663Z" stroke="#D1D1D1" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_25224:39075">
                                <rect width="88" height="16" fill="white" transform="translate(0.486328)" />
                            </clipPath>
                        </defs>
                    </svg>
                </label>
            </div>

            <div>
                <label >
                    <input onClick={filteredRating3} type="radio" name="same" id="" />
                    <svg width="89" height="16" viewBox="0 0 89 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_25224:39096)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.81945 2.12663C7.8655 1.9806 7.9569 1.85306 8.08038 1.76252C8.20387 1.67198 8.353 1.62317 8.50611 1.62317C8.65923 1.62317 8.80836 1.67198 8.93184 1.76252C9.05533 1.85306 9.14673 1.9806 9.19278 2.12663L10.4328 5.93996H14.4328C14.5914 5.93397 14.7476 5.98006 14.8775 6.07119C15.0074 6.16232 15.104 6.29348 15.1523 6.44464C15.2007 6.5958 15.1983 6.75863 15.1454 6.90827C15.0925 7.0579 14.9921 7.18611 14.8594 7.2733L11.6128 9.62663L12.8528 13.4466C12.9018 13.5921 12.9031 13.7495 12.8563 13.8958C12.8096 14.042 12.7173 14.1695 12.5929 14.2596C12.4686 14.3497 12.3187 14.3977 12.1652 14.3966C12.0116 14.3954 11.8624 14.3452 11.7394 14.2533L8.48611 11.8733L5.23945 14.2333C5.11645 14.3252 4.96729 14.3754 4.81374 14.3766C4.66019 14.3777 4.5103 14.3297 4.38596 14.2396C4.26162 14.1495 4.16933 14.022 4.12259 13.8758C4.07584 13.7295 4.07707 13.5721 4.12611 13.4266L5.36611 9.60663L2.11945 7.2533C1.98684 7.16611 1.88641 7.0379 1.83353 6.88827C1.78064 6.73863 1.77819 6.5758 1.82656 6.42464C1.87493 6.27348 1.97146 6.14232 2.10139 6.05119C2.23133 5.96006 2.38752 5.91397 2.54611 5.91996H6.54611L7.81945 2.12663Z" fill="#FDBC15" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M25.8194 2.12663C25.8655 1.9806 25.9569 1.85306 26.0804 1.76252C26.2039 1.67198 26.353 1.62317 26.5061 1.62317C26.6592 1.62317 26.8084 1.67198 26.9318 1.76252C27.0553 1.85306 27.1467 1.9806 27.1928 2.12663L28.4328 5.93996H32.4328C32.5914 5.93397 32.7476 5.98006 32.8775 6.07119C33.0074 6.16232 33.104 6.29348 33.1523 6.44464C33.2007 6.5958 33.1983 6.75863 33.1454 6.90827C33.0925 7.0579 32.9921 7.18611 32.8594 7.2733L29.6128 9.62663L30.8528 13.4466C30.9018 13.5921 30.9031 13.7495 30.8563 13.8958C30.8096 14.042 30.7173 14.1695 30.5929 14.2596C30.4686 14.3497 30.3187 14.3977 30.1652 14.3966C30.0116 14.3954 29.8624 14.3452 29.7394 14.2533L26.4861 11.8733L23.2394 14.2333C23.1165 14.3252 22.9673 14.3754 22.8137 14.3766C22.6602 14.3777 22.5103 14.3297 22.386 14.2396C22.2616 14.1495 22.1693 14.022 22.1226 13.8758C22.0758 13.7295 22.0771 13.5721 22.1261 13.4266L23.3661 9.60663L20.1194 7.2533C19.9868 7.16611 19.8864 7.0379 19.8335 6.88827C19.7806 6.73863 19.7782 6.5758 19.8266 6.42464C19.8749 6.27348 19.9715 6.14232 20.1014 6.05119C20.2313 5.96006 20.3875 5.91397 20.5461 5.91996H24.5461L25.8194 2.12663Z" fill="#FDBC15" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M43.8194 2.12663C43.8655 1.9806 43.9569 1.85306 44.0804 1.76252C44.2039 1.67198 44.353 1.62317 44.5061 1.62317C44.6592 1.62317 44.8084 1.67198 44.9318 1.76252C45.0553 1.85306 45.1467 1.9806 45.1928 2.12663L46.4328 5.93996H50.4328C50.5914 5.93397 50.7476 5.98006 50.8775 6.07119C51.0074 6.16232 51.104 6.29348 51.1523 6.44464C51.2007 6.5958 51.1983 6.75863 51.1454 6.90827C51.0925 7.0579 50.9921 7.18611 50.8594 7.2733L47.6128 9.62663L48.8528 13.4466C48.9018 13.5921 48.9031 13.7495 48.8563 13.8958C48.8096 14.042 48.7173 14.1695 48.5929 14.2596C48.4686 14.3497 48.3187 14.3977 48.1652 14.3966C48.0116 14.3954 47.8624 14.3452 47.7394 14.2533L44.4861 11.8733L41.2394 14.2333C41.1165 14.3252 40.9673 14.3754 40.8137 14.3766C40.6602 14.3777 40.5103 14.3297 40.386 14.2396C40.2616 14.1495 40.1693 14.022 40.1226 13.8758C40.0758 13.7295 40.0771 13.5721 40.1261 13.4266L41.3661 9.60663L38.1194 7.2533C37.9868 7.16611 37.8864 7.0379 37.8335 6.88827C37.7806 6.73863 37.7782 6.5758 37.8266 6.42464C37.8749 6.27348 37.9715 6.14232 38.1014 6.05119C38.2313 5.96006 38.3875 5.91397 38.5461 5.91996H42.5461L43.8194 2.12663Z" fill="#FDBC15" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M61.8194 2.12663C61.8655 1.9806 61.9569 1.85306 62.0804 1.76252C62.2039 1.67198 62.353 1.62317 62.5061 1.62317C62.6592 1.62317 62.8084 1.67198 62.9318 1.76252C63.0553 1.85306 63.1467 1.9806 63.1928 2.12663L64.4328 5.93996H68.4328C68.5914 5.93397 68.7476 5.98006 68.8775 6.07119C69.0074 6.16232 69.104 6.29348 69.1523 6.44464C69.2007 6.5958 69.1983 6.75863 69.1454 6.90827C69.0925 7.0579 68.9921 7.18611 68.8594 7.2733L65.6128 9.62663L66.8528 13.4466C66.9018 13.5921 66.9031 13.7495 66.8563 13.8958C66.8096 14.042 66.7173 14.1695 66.5929 14.2596C66.4686 14.3497 66.3187 14.3977 66.1652 14.3966C66.0116 14.3954 65.8624 14.3452 65.7394 14.2533L62.4861 11.8733L59.2394 14.2333C59.1165 14.3252 58.9673 14.3754 58.8137 14.3766C58.6602 14.3777 58.5103 14.3297 58.386 14.2396C58.2616 14.1495 58.1693 14.022 58.1226 13.8758C58.0758 13.7295 58.0771 13.5721 58.1261 13.4266L59.3661 9.60663L56.1194 7.2533C55.9868 7.16611 55.8864 7.0379 55.8335 6.88827C55.7806 6.73863 55.7782 6.5758 55.8266 6.42464C55.8749 6.27348 55.9715 6.14232 56.1014 6.05119C56.2313 5.96006 56.3875 5.91397 56.5461 5.91996H60.5461L61.8194 2.12663Z" stroke="#D1D1D1" stroke-linecap="round" stroke-linejoin="round" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M79.8194 2.12663C79.8655 1.9806 79.9569 1.85306 80.0804 1.76252C80.2039 1.67198 80.353 1.62317 80.5061 1.62317C80.6592 1.62317 80.8084 1.67198 80.9318 1.76252C81.0553 1.85306 81.1467 1.9806 81.1928 2.12663L82.4328 5.93996H86.4328C86.5914 5.93397 86.7476 5.98006 86.8775 6.07119C87.0074 6.16232 87.104 6.29348 87.1523 6.44464C87.2007 6.5958 87.1983 6.75863 87.1454 6.90827C87.0925 7.0579 86.9921 7.18611 86.8594 7.2733L83.6128 9.62663L84.8528 13.4466C84.9018 13.5921 84.9031 13.7495 84.8563 13.8958C84.8096 14.042 84.7173 14.1695 84.5929 14.2596C84.4686 14.3497 84.3187 14.3977 84.1652 14.3966C84.0116 14.3954 83.8624 14.3452 83.7394 14.2533L80.4861 11.8733L77.2394 14.2333C77.1165 14.3252 76.9673 14.3754 76.8137 14.3766C76.6602 14.3777 76.5103 14.3297 76.386 14.2396C76.2616 14.1495 76.1693 14.022 76.1226 13.8758C76.0758 13.7295 76.0771 13.5721 76.1261 13.4266L77.3661 9.60663L74.1194 7.2533C73.9868 7.16611 73.8864 7.0379 73.8335 6.88827C73.7806 6.73863 73.7782 6.5758 73.8266 6.42464C73.8749 6.27348 73.9715 6.14232 74.1014 6.05119C74.2313 5.96006 74.3875 5.91397 74.5461 5.91996H78.5461L79.8194 2.12663Z" stroke="#D1D1D1" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_25224:39096">
                                <rect width="88" height="16" fill="white" transform="translate(0.486328)" />
                            </clipPath>
                        </defs>
                    </svg>
                </label>
            </div>

            <div>
                <label >
                    <input onClick={filteredRating2} type="radio" name="same" id="" />
                    <svg width="89" height="16" viewBox="0 0 89 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_25224:39117)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.81945 2.12663C7.8655 1.9806 7.9569 1.85306 8.08038 1.76252C8.20387 1.67198 8.353 1.62317 8.50611 1.62317C8.65923 1.62317 8.80836 1.67198 8.93184 1.76252C9.05533 1.85306 9.14673 1.9806 9.19278 2.12663L10.4328 5.93996H14.4328C14.5914 5.93397 14.7476 5.98006 14.8775 6.07119C15.0074 6.16232 15.104 6.29348 15.1523 6.44464C15.2007 6.5958 15.1983 6.75863 15.1454 6.90827C15.0925 7.0579 14.9921 7.18611 14.8594 7.2733L11.6128 9.62663L12.8528 13.4466C12.9018 13.5921 12.9031 13.7495 12.8563 13.8958C12.8096 14.042 12.7173 14.1695 12.5929 14.2596C12.4686 14.3497 12.3187 14.3977 12.1652 14.3966C12.0116 14.3954 11.8624 14.3452 11.7394 14.2533L8.48611 11.8733L5.23945 14.2333C5.11645 14.3252 4.96729 14.3754 4.81374 14.3766C4.66019 14.3777 4.5103 14.3297 4.38596 14.2396C4.26162 14.1495 4.16933 14.022 4.12259 13.8758C4.07584 13.7295 4.07707 13.5721 4.12611 13.4266L5.36611 9.60663L2.11945 7.2533C1.98684 7.16611 1.88641 7.0379 1.83353 6.88827C1.78064 6.73863 1.77819 6.5758 1.82656 6.42464C1.87493 6.27348 1.97146 6.14232 2.10139 6.05119C2.23133 5.96006 2.38752 5.91397 2.54611 5.91996H6.54611L7.81945 2.12663Z" fill="#FDBC15" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M25.8194 2.12663C25.8655 1.9806 25.9569 1.85306 26.0804 1.76252C26.2039 1.67198 26.353 1.62317 26.5061 1.62317C26.6592 1.62317 26.8084 1.67198 26.9318 1.76252C27.0553 1.85306 27.1467 1.9806 27.1928 2.12663L28.4328 5.93996H32.4328C32.5914 5.93397 32.7476 5.98006 32.8775 6.07119C33.0074 6.16232 33.104 6.29348 33.1523 6.44464C33.2007 6.5958 33.1983 6.75863 33.1454 6.90827C33.0925 7.0579 32.9921 7.18611 32.8594 7.2733L29.6128 9.62663L30.8528 13.4466C30.9018 13.5921 30.9031 13.7495 30.8563 13.8958C30.8096 14.042 30.7173 14.1695 30.5929 14.2596C30.4686 14.3497 30.3187 14.3977 30.1652 14.3966C30.0116 14.3954 29.8624 14.3452 29.7394 14.2533L26.4861 11.8733L23.2394 14.2333C23.1165 14.3252 22.9673 14.3754 22.8137 14.3766C22.6602 14.3777 22.5103 14.3297 22.386 14.2396C22.2616 14.1495 22.1693 14.022 22.1226 13.8758C22.0758 13.7295 22.0771 13.5721 22.1261 13.4266L23.3661 9.60663L20.1194 7.2533C19.9868 7.16611 19.8864 7.0379 19.8335 6.88827C19.7806 6.73863 19.7782 6.5758 19.8266 6.42464C19.8749 6.27348 19.9715 6.14232 20.1014 6.05119C20.2313 5.96006 20.3875 5.91397 20.5461 5.91996H24.5461L25.8194 2.12663Z" fill="#FDBC15" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M43.8194 2.12663C43.8655 1.9806 43.9569 1.85306 44.0804 1.76252C44.2039 1.67198 44.353 1.62317 44.5061 1.62317C44.6592 1.62317 44.8084 1.67198 44.9318 1.76252C45.0553 1.85306 45.1467 1.9806 45.1928 2.12663L46.4328 5.93996H50.4328C50.5914 5.93397 50.7476 5.98006 50.8775 6.07119C51.0074 6.16232 51.104 6.29348 51.1523 6.44464C51.2007 6.5958 51.1983 6.75863 51.1454 6.90827C51.0925 7.0579 50.9921 7.18611 50.8594 7.2733L47.6128 9.62663L48.8528 13.4466C48.9018 13.5921 48.9031 13.7495 48.8563 13.8958C48.8096 14.042 48.7173 14.1695 48.5929 14.2596C48.4686 14.3497 48.3187 14.3977 48.1652 14.3966C48.0116 14.3954 47.8624 14.3452 47.7394 14.2533L44.4861 11.8733L41.2394 14.2333C41.1165 14.3252 40.9673 14.3754 40.8137 14.3766C40.6602 14.3777 40.5103 14.3297 40.386 14.2396C40.2616 14.1495 40.1693 14.022 40.1226 13.8758C40.0758 13.7295 40.0771 13.5721 40.1261 13.4266L41.3661 9.60663L38.1194 7.2533C37.9868 7.16611 37.8864 7.0379 37.8335 6.88827C37.7806 6.73863 37.7782 6.5758 37.8266 6.42464C37.8749 6.27348 37.9715 6.14232 38.1014 6.05119C38.2313 5.96006 38.3875 5.91397 38.5461 5.91996H42.5461L43.8194 2.12663Z" stroke="#D1D1D1" stroke-linecap="round" stroke-linejoin="round" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M61.8194 2.12663C61.8655 1.9806 61.9569 1.85306 62.0804 1.76252C62.2039 1.67198 62.353 1.62317 62.5061 1.62317C62.6592 1.62317 62.8084 1.67198 62.9318 1.76252C63.0553 1.85306 63.1467 1.9806 63.1928 2.12663L64.4328 5.93996H68.4328C68.5914 5.93397 68.7476 5.98006 68.8775 6.07119C69.0074 6.16232 69.104 6.29348 69.1523 6.44464C69.2007 6.5958 69.1983 6.75863 69.1454 6.90827C69.0925 7.0579 68.9921 7.18611 68.8594 7.2733L65.6128 9.62663L66.8528 13.4466C66.9018 13.5921 66.9031 13.7495 66.8563 13.8958C66.8096 14.042 66.7173 14.1695 66.5929 14.2596C66.4686 14.3497 66.3187 14.3977 66.1652 14.3966C66.0116 14.3954 65.8624 14.3452 65.7394 14.2533L62.4861 11.8733L59.2394 14.2333C59.1165 14.3252 58.9673 14.3754 58.8137 14.3766C58.6602 14.3777 58.5103 14.3297 58.386 14.2396C58.2616 14.1495 58.1693 14.022 58.1226 13.8758C58.0758 13.7295 58.0771 13.5721 58.1261 13.4266L59.3661 9.60663L56.1194 7.2533C55.9868 7.16611 55.8864 7.0379 55.8335 6.88827C55.7806 6.73863 55.7782 6.5758 55.8266 6.42464C55.8749 6.27348 55.9715 6.14232 56.1014 6.05119C56.2313 5.96006 56.3875 5.91397 56.5461 5.91996H60.5461L61.8194 2.12663Z" stroke="#D1D1D1" stroke-linecap="round" stroke-linejoin="round" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M79.8194 2.12663C79.8655 1.9806 79.9569 1.85306 80.0804 1.76252C80.2039 1.67198 80.353 1.62317 80.5061 1.62317C80.6592 1.62317 80.8084 1.67198 80.9318 1.76252C81.0553 1.85306 81.1467 1.9806 81.1928 2.12663L82.4328 5.93996H86.4328C86.5914 5.93397 86.7476 5.98006 86.8775 6.07119C87.0074 6.16232 87.104 6.29348 87.1523 6.44464C87.2007 6.5958 87.1983 6.75863 87.1454 6.90827C87.0925 7.0579 86.9921 7.18611 86.8594 7.2733L83.6128 9.62663L84.8528 13.4466C84.9018 13.5921 84.9031 13.7495 84.8563 13.8958C84.8096 14.042 84.7173 14.1695 84.5929 14.2596C84.4686 14.3497 84.3187 14.3977 84.1652 14.3966C84.0116 14.3954 83.8624 14.3452 83.7394 14.2533L80.4861 11.8733L77.2394 14.2333C77.1165 14.3252 76.9673 14.3754 76.8137 14.3766C76.6602 14.3777 76.5103 14.3297 76.386 14.2396C76.2616 14.1495 76.1693 14.022 76.1226 13.8758C76.0758 13.7295 76.0771 13.5721 76.1261 13.4266L77.3661 9.60663L74.1194 7.2533C73.9868 7.16611 73.8864 7.0379 73.8335 6.88827C73.7806 6.73863 73.7782 6.5758 73.8266 6.42464C73.8749 6.27348 73.9715 6.14232 74.1014 6.05119C74.2313 5.96006 74.3875 5.91397 74.5461 5.91996H78.5461L79.8194 2.12663Z" stroke="#D1D1D1" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_25224:39117">
                                <rect width="88" height="16" fill="white" transform="translate(0.486328)" />
                            </clipPath>
                        </defs>
                    </svg>

                </label>
            </div>

            <div>
                <label >
                    <input onClick={filteredRating1} type="radio" name="same" id="" />
                    <svg width="89" height="16" viewBox="0 0 89 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_25224:39138)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.81945 2.12663C7.8655 1.9806 7.9569 1.85306 8.08038 1.76252C8.20387 1.67198 8.353 1.62317 8.50611 1.62317C8.65923 1.62317 8.80836 1.67198 8.93184 1.76252C9.05533 1.85306 9.14673 1.9806 9.19278 2.12663L10.4328 5.93996H14.4328C14.5914 5.93397 14.7476 5.98006 14.8775 6.07119C15.0074 6.16232 15.104 6.29348 15.1523 6.44464C15.2007 6.5958 15.1983 6.75863 15.1454 6.90827C15.0925 7.0579 14.9921 7.18611 14.8594 7.2733L11.6128 9.62663L12.8528 13.4466C12.9018 13.5921 12.9031 13.7495 12.8563 13.8958C12.8096 14.042 12.7173 14.1695 12.5929 14.2596C12.4686 14.3497 12.3187 14.3977 12.1652 14.3966C12.0116 14.3954 11.8624 14.3452 11.7394 14.2533L8.48611 11.8733L5.23945 14.2333C5.11645 14.3252 4.96729 14.3754 4.81374 14.3766C4.66019 14.3777 4.5103 14.3297 4.38596 14.2396C4.26162 14.1495 4.16933 14.022 4.12259 13.8758C4.07584 13.7295 4.07707 13.5721 4.12611 13.4266L5.36611 9.60663L2.11945 7.2533C1.98684 7.16611 1.88641 7.0379 1.83353 6.88827C1.78064 6.73863 1.77819 6.5758 1.82656 6.42464C1.87493 6.27348 1.97146 6.14232 2.10139 6.05119C2.23133 5.96006 2.38752 5.91397 2.54611 5.91996H6.54611L7.81945 2.12663Z" fill="#FDBC15" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M25.8194 2.12663C25.8655 1.9806 25.9569 1.85306 26.0804 1.76252C26.2039 1.67198 26.353 1.62317 26.5061 1.62317C26.6592 1.62317 26.8084 1.67198 26.9318 1.76252C27.0553 1.85306 27.1467 1.9806 27.1928 2.12663L28.4328 5.93996H32.4328C32.5914 5.93397 32.7476 5.98006 32.8775 6.07119C33.0074 6.16232 33.104 6.29348 33.1523 6.44464C33.2007 6.5958 33.1983 6.75863 33.1454 6.90827C33.0925 7.0579 32.9921 7.18611 32.8594 7.2733L29.6128 9.62663L30.8528 13.4466C30.9018 13.5921 30.9031 13.7495 30.8563 13.8958C30.8096 14.042 30.7173 14.1695 30.5929 14.2596C30.4686 14.3497 30.3187 14.3977 30.1652 14.3966C30.0116 14.3954 29.8624 14.3452 29.7394 14.2533L26.4861 11.8733L23.2394 14.2333C23.1165 14.3252 22.9673 14.3754 22.8137 14.3766C22.6602 14.3777 22.5103 14.3297 22.386 14.2396C22.2616 14.1495 22.1693 14.022 22.1226 13.8758C22.0758 13.7295 22.0771 13.5721 22.1261 13.4266L23.3661 9.60663L20.1194 7.2533C19.9868 7.16611 19.8864 7.0379 19.8335 6.88827C19.7806 6.73863 19.7782 6.5758 19.8266 6.42464C19.8749 6.27348 19.9715 6.14232 20.1014 6.05119C20.2313 5.96006 20.3875 5.91397 20.5461 5.91996H24.5461L25.8194 2.12663Z" stroke="#D1D1D1" stroke-linecap="round" stroke-linejoin="round" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M43.8194 2.12663C43.8655 1.9806 43.9569 1.85306 44.0804 1.76252C44.2039 1.67198 44.353 1.62317 44.5061 1.62317C44.6592 1.62317 44.8084 1.67198 44.9318 1.76252C45.0553 1.85306 45.1467 1.9806 45.1928 2.12663L46.4328 5.93996H50.4328C50.5914 5.93397 50.7476 5.98006 50.8775 6.07119C51.0074 6.16232 51.104 6.29348 51.1523 6.44464C51.2007 6.5958 51.1983 6.75863 51.1454 6.90827C51.0925 7.0579 50.9921 7.18611 50.8594 7.2733L47.6128 9.62663L48.8528 13.4466C48.9018 13.5921 48.9031 13.7495 48.8563 13.8958C48.8096 14.042 48.7173 14.1695 48.5929 14.2596C48.4686 14.3497 48.3187 14.3977 48.1652 14.3966C48.0116 14.3954 47.8624 14.3452 47.7394 14.2533L44.4861 11.8733L41.2394 14.2333C41.1165 14.3252 40.9673 14.3754 40.8137 14.3766C40.6602 14.3777 40.5103 14.3297 40.386 14.2396C40.2616 14.1495 40.1693 14.022 40.1226 13.8758C40.0758 13.7295 40.0771 13.5721 40.1261 13.4266L41.3661 9.60663L38.1194 7.2533C37.9868 7.16611 37.8864 7.0379 37.8335 6.88827C37.7806 6.73863 37.7782 6.5758 37.8266 6.42464C37.8749 6.27348 37.9715 6.14232 38.1014 6.05119C38.2313 5.96006 38.3875 5.91397 38.5461 5.91996H42.5461L43.8194 2.12663Z" stroke="#D1D1D1" stroke-linecap="round" stroke-linejoin="round" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M61.8194 2.12663C61.8655 1.9806 61.9569 1.85306 62.0804 1.76252C62.2039 1.67198 62.353 1.62317 62.5061 1.62317C62.6592 1.62317 62.8084 1.67198 62.9318 1.76252C63.0553 1.85306 63.1467 1.9806 63.1928 2.12663L64.4328 5.93996H68.4328C68.5914 5.93397 68.7476 5.98006 68.8775 6.07119C69.0074 6.16232 69.104 6.29348 69.1523 6.44464C69.2007 6.5958 69.1983 6.75863 69.1454 6.90827C69.0925 7.0579 68.9921 7.18611 68.8594 7.2733L65.6128 9.62663L66.8528 13.4466C66.9018 13.5921 66.9031 13.7495 66.8563 13.8958C66.8096 14.042 66.7173 14.1695 66.5929 14.2596C66.4686 14.3497 66.3187 14.3977 66.1652 14.3966C66.0116 14.3954 65.8624 14.3452 65.7394 14.2533L62.4861 11.8733L59.2394 14.2333C59.1165 14.3252 58.9673 14.3754 58.8137 14.3766C58.6602 14.3777 58.5103 14.3297 58.386 14.2396C58.2616 14.1495 58.1693 14.022 58.1226 13.8758C58.0758 13.7295 58.0771 13.5721 58.1261 13.4266L59.3661 9.60663L56.1194 7.2533C55.9868 7.16611 55.8864 7.0379 55.8335 6.88827C55.7806 6.73863 55.7782 6.5758 55.8266 6.42464C55.8749 6.27348 55.9715 6.14232 56.1014 6.05119C56.2313 5.96006 56.3875 5.91397 56.5461 5.91996H60.5461L61.8194 2.12663Z" stroke="#D1D1D1" stroke-linecap="round" stroke-linejoin="round" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M79.8194 2.12663C79.8655 1.9806 79.9569 1.85306 80.0804 1.76252C80.2039 1.67198 80.353 1.62317 80.5061 1.62317C80.6592 1.62317 80.8084 1.67198 80.9318 1.76252C81.0553 1.85306 81.1467 1.9806 81.1928 2.12663L82.4328 5.93996H86.4328C86.5914 5.93397 86.7476 5.98006 86.8775 6.07119C87.0074 6.16232 87.104 6.29348 87.1523 6.44464C87.2007 6.5958 87.1983 6.75863 87.1454 6.90827C87.0925 7.0579 86.9921 7.18611 86.8594 7.2733L83.6128 9.62663L84.8528 13.4466C84.9018 13.5921 84.9031 13.7495 84.8563 13.8958C84.8096 14.042 84.7173 14.1695 84.5929 14.2596C84.4686 14.3497 84.3187 14.3977 84.1652 14.3966C84.0116 14.3954 83.8624 14.3452 83.7394 14.2533L80.4861 11.8733L77.2394 14.2333C77.1165 14.3252 76.9673 14.3754 76.8137 14.3766C76.6602 14.3777 76.5103 14.3297 76.386 14.2396C76.2616 14.1495 76.1693 14.022 76.1226 13.8758C76.0758 13.7295 76.0771 13.5721 76.1261 13.4266L77.3661 9.60663L74.1194 7.2533C73.9868 7.16611 73.8864 7.0379 73.8335 6.88827C73.7806 6.73863 73.7782 6.5758 73.8266 6.42464C73.8749 6.27348 73.9715 6.14232 74.1014 6.05119C74.2313 5.96006 74.3875 5.91397 74.5461 5.91996H78.5461L79.8194 2.12663Z" stroke="#D1D1D1" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_25224:39138">
                                <rect width="88" height="16" fill="white" transform="translate(0.486328)" />
                            </clipPath>
                        </defs>
                    </svg>

                </label>
            </div>
        </div>
    )
}

let mapStateToProps = state => state
export default connect(mapStateToProps)(Review)
