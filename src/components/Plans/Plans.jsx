import './plans.scss';

const Plans = () => {
    return (
        <div className='plans'>
            <div className='bg-blur bg-blur-1'></div>
            <div className='bg-blur bg-blur-2'></div>
            <div className='title__header'>
                <span className='text__stroke'>ready to start</span>
                <span>your journey</span>
                <span className='text__stroke'>now with us</span>
            </div>
            <div className='plans__cards'>
                <div className='plan__card'>
                    <svg
                        width='15'
                        height='13'
                        viewBox='0 0 15 13'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path d='M9.01789 5.76762H8.26715V5.03093C8.26715 4.83555 8.18806 4.64816 8.04727 4.51001C7.90648 4.37185 7.71552 4.29424 7.51641 4.29424C7.3173 4.29424 7.12635 4.37185 6.98556 4.51001C6.84477 4.64816 6.76567 4.83555 6.76567 5.03093V5.76762H6.01493C5.81582 5.76762 5.62487 5.84524 5.48408 5.98339C5.34329 6.12155 5.26419 6.30893 5.26419 6.50431C5.26419 6.6997 5.34329 6.88708 5.48408 7.02523C5.62487 7.16339 5.81582 7.24101 6.01493 7.24101H6.76567V7.9777C6.76567 8.17308 6.84477 8.36046 6.98556 8.49862C7.12635 8.63678 7.3173 8.71439 7.51641 8.71439C7.71552 8.71439 7.90648 8.63678 8.04727 8.49862C8.18806 8.36046 8.26715 8.17308 8.26715 7.9777V7.24101H9.01789C9.217 7.24101 9.40796 7.16339 9.54875 7.02523C9.68954 6.88708 9.76864 6.6997 9.76864 6.50431C9.76864 6.30893 9.68954 6.12155 9.54875 5.98339C9.40796 5.84524 9.217 5.76762 9.01789 5.76762ZM13.6425 1.34746C12.8419 0.570035 11.7846 0.0989691 10.6613 0.0192671C9.53795 -0.0604348 8.42257 0.256476 7.51641 0.912815C6.56121 0.215636 5.37229 -0.100497 4.18907 0.0280747C3.00585 0.156647 1.91622 0.720375 1.1396 1.60574C0.362984 2.4911 -0.0429299 3.63233 0.00360011 4.79962C0.0501301 5.9669 0.545648 7.07353 1.39037 7.89666L5.89481 12.3537C6.31711 12.7675 6.88954 13 7.48638 13C8.08322 13 8.65566 12.7675 9.07795 12.3537L13.5824 7.89666C14.026 7.47133 14.3796 6.96416 14.6229 6.4043C14.8661 5.84443 14.9942 5.24291 14.9998 4.63432C15.0054 4.02572 14.8883 3.42203 14.6554 2.85796C14.4225 2.2939 14.0782 1.78056 13.6425 1.34746ZM12.5839 6.84319L8.07947 11.2633C8.00968 11.3324 7.92664 11.3872 7.83516 11.4246C7.74368 11.462 7.64555 11.4813 7.54644 11.4813C7.44734 11.4813 7.34921 11.462 7.25773 11.4246C7.16624 11.3872 7.08321 11.3324 7.01342 11.2633L2.50897 6.84319C1.92021 6.25262 1.59052 5.45929 1.59052 4.63311C1.59052 3.80694 1.92021 3.01361 2.50897 2.42304C3.10893 1.84178 3.91809 1.51585 4.76119 1.51585C5.6043 1.51585 6.41346 1.84178 7.01342 2.42304C7.08321 2.49208 7.16624 2.54689 7.25773 2.58429C7.34921 2.62169 7.44734 2.64095 7.54644 2.64095C7.64555 2.64095 7.74368 2.62169 7.83516 2.58429C7.92664 2.54689 8.00968 2.49208 8.07947 2.42304C8.67943 1.84178 9.48859 1.51585 10.3317 1.51585C11.1748 1.51585 11.984 1.84178 12.5839 2.42304C13.1772 3.01427 13.5097 3.81073 13.5097 4.64048C13.5097 5.47023 13.1772 6.2667 12.5839 6.85793V6.84319Z'></path>
                    </svg>
                    <h3>basic plan</h3>
                    <h1>$ 25</h1>
                    <div className='plan__features'>
                        <div className='plan__feature'>
                            <img
                                src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhCAYAAABX5MJvAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHbSURBVHgBxZiNcYMwDIVFJ8gGZQQ2KBuUETxCNoANQieATtARkkyQdgJ3g4ygykFcdY4NNpjk3ekS4Fn+bHz+IYMIIWJJP28UBUcuHv9ynClOWZadIJWo4h1FTXHFOGkKBWtFSSpOtkY7WCJu/cGR0PRGa1pIkVtlCobuBbieqKNmT+0DuDgq38e0irylzy8AbnIZbIAWl3ZpAACpsQ2HScMDANRTAdikhaGDhAoFkL1gYHJIpCAANmphUpBIDoDWZyxlL0AiOQD6KXOTeixEAXCBozBXM14197pCAXCYFKvb+LPGQzEDMKpeA8Desd4LyBIw3cK9VUG9FID9//WGQnDB3gUSCzAJgQFrhAPkGAvggtDi+jUwgQ0SC1CIMtrc+BI3FATKAdJHlK1kT77QvR/xvAhNRHtIRT8ffPnJ16F6F//P9ox5xYR7B5+sIVCON+UmtoENhdZiKR80j+gNypujb7HEYQqVDw+wgShv5+wFYZAj1qiGhML7CU35jO0WIBi6r2Cza7vf4cKdFrrPL5fQgjaIxriJzHd0NHnDB73j1YwwHQ7jp7AqNSNfcctd59Zl5xdOqnGdNM5slraEMb3RhLQ+gwjhMMWaMN8ocrj/PvENw1oU9X3iD5Siz1H9lZMJAAAAAElFTkSuQmCC'
                                alt=''
                            />
                            <span>2 hours of excercises</span>
                        </div>
                        <div className='plan__feature'>
                            <img
                                src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhCAYAAABX5MJvAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHbSURBVHgBxZiNcYMwDIVFJ8gGZQQ2KBuUETxCNoANQieATtARkkyQdgJ3g4ygykFcdY4NNpjk3ekS4Fn+bHz+IYMIIWJJP28UBUcuHv9ynClOWZadIJWo4h1FTXHFOGkKBWtFSSpOtkY7WCJu/cGR0PRGa1pIkVtlCobuBbieqKNmT+0DuDgq38e0irylzy8AbnIZbIAWl3ZpAACpsQ2HScMDANRTAdikhaGDhAoFkL1gYHJIpCAANmphUpBIDoDWZyxlL0AiOQD6KXOTeixEAXCBozBXM14197pCAXCYFKvb+LPGQzEDMKpeA8Desd4LyBIw3cK9VUG9FID9//WGQnDB3gUSCzAJgQFrhAPkGAvggtDi+jUwgQ0SC1CIMtrc+BI3FATKAdJHlK1kT77QvR/xvAhNRHtIRT8ffPnJ16F6F//P9ox5xYR7B5+sIVCON+UmtoENhdZiKR80j+gNypujb7HEYQqVDw+wgShv5+wFYZAj1qiGhML7CU35jO0WIBi6r2Cza7vf4cKdFrrPL5fQgjaIxriJzHd0NHnDB73j1YwwHQ7jp7AqNSNfcctd59Zl5xdOqnGdNM5slraEMb3RhLQ+gwjhMMWaMN8ocrj/PvENw1oU9X3iD5Siz1H9lZMJAAAAAElFTkSuQmCC'
                                alt=''
                            />
                            <span>Free consultation to coaches</span>
                        </div>
                        <div className='plan__feature'>
                            <img
                                src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhCAYAAABX5MJvAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHbSURBVHgBxZiNcYMwDIVFJ8gGZQQ2KBuUETxCNoANQieATtARkkyQdgJ3g4ygykFcdY4NNpjk3ekS4Fn+bHz+IYMIIWJJP28UBUcuHv9ynClOWZadIJWo4h1FTXHFOGkKBWtFSSpOtkY7WCJu/cGR0PRGa1pIkVtlCobuBbieqKNmT+0DuDgq38e0irylzy8AbnIZbIAWl3ZpAACpsQ2HScMDANRTAdikhaGDhAoFkL1gYHJIpCAANmphUpBIDoDWZyxlL0AiOQD6KXOTeixEAXCBozBXM14197pCAXCYFKvb+LPGQzEDMKpeA8Desd4LyBIw3cK9VUG9FID9//WGQnDB3gUSCzAJgQFrhAPkGAvggtDi+jUwgQ0SC1CIMtrc+BI3FATKAdJHlK1kT77QvR/xvAhNRHtIRT8ffPnJ16F6F//P9ox5xYR7B5+sIVCON+UmtoENhdZiKR80j+gNypujb7HEYQqVDw+wgShv5+wFYZAj1qiGhML7CU35jO0WIBi6r2Cza7vf4cKdFrrPL5fQgjaIxriJzHd0NHnDB73j1YwwHQ7jp7AqNSNfcctd59Zl5xdOqnGdNM5slraEMb3RhLQ+gwjhMMWaMN8ocrj/PvENw1oU9X3iD5Siz1H9lZMJAAAAAElFTkSuQmCC'
                                alt=''
                            />
                            <span>Access to The Community</span>
                        </div>
                        <div className='plan__see-more'>
                            <span>See more benefits -></span>
                        </div>
                        <button className='plan__join-now'>Join now</button>
                    </div>
                </div>
                <div className='plan__card'>
                    <svg
                        width='28'
                        height='24'
                        viewBox='0 0 28 24'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path d='M3.11111 18L0 1.5L8.55556 9L14 0L19.4444 9L28 1.5L24.8889 18H3.11111ZM24.8889 22.5C24.8889 23.4 24.2667 24 23.3333 24H4.66667C3.73333 24 3.11111 23.4 3.11111 22.5V21H24.8889V22.5Z'></path>
                    </svg>
                    <h3>premium plan</h3>
                    <h1>$ 30</h1>
                    <div className='plan__features'>
                        <div className='plan__feature'>
                            <img
                                src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhCAYAAABX5MJvAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHbSURBVHgBxZiNcYMwDIVFJ8gGZQQ2KBuUETxCNoANQieATtARkkyQdgJ3g4ygykFcdY4NNpjk3ekS4Fn+bHz+IYMIIWJJP28UBUcuHv9ynClOWZadIJWo4h1FTXHFOGkKBWtFSSpOtkY7WCJu/cGR0PRGa1pIkVtlCobuBbieqKNmT+0DuDgq38e0irylzy8AbnIZbIAWl3ZpAACpsQ2HScMDANRTAdikhaGDhAoFkL1gYHJIpCAANmphUpBIDoDWZyxlL0AiOQD6KXOTeixEAXCBozBXM14197pCAXCYFKvb+LPGQzEDMKpeA8Desd4LyBIw3cK9VUG9FID9//WGQnDB3gUSCzAJgQFrhAPkGAvggtDi+jUwgQ0SC1CIMtrc+BI3FATKAdJHlK1kT77QvR/xvAhNRHtIRT8ffPnJ16F6F//P9ox5xYR7B5+sIVCON+UmtoENhdZiKR80j+gNypujb7HEYQqVDw+wgShv5+wFYZAj1qiGhML7CU35jO0WIBi6r2Cza7vf4cKdFrrPL5fQgjaIxriJzHd0NHnDB73j1YwwHQ7jp7AqNSNfcctd59Zl5xdOqnGdNM5slraEMb3RhLQ+gwjhMMWaMN8ocrj/PvENw1oU9X3iD5Siz1H9lZMJAAAAAElFTkSuQmCC'
                                alt=''
                            />
                            <span>5 hours of excercises</span>
                        </div>
                        <div className='plan__feature'>
                            <img
                                src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhCAYAAABX5MJvAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHbSURBVHgBxZiNcYMwDIVFJ8gGZQQ2KBuUETxCNoANQieATtARkkyQdgJ3g4ygykFcdY4NNpjk3ekS4Fn+bHz+IYMIIWJJP28UBUcuHv9ynClOWZadIJWo4h1FTXHFOGkKBWtFSSpOtkY7WCJu/cGR0PRGa1pIkVtlCobuBbieqKNmT+0DuDgq38e0irylzy8AbnIZbIAWl3ZpAACpsQ2HScMDANRTAdikhaGDhAoFkL1gYHJIpCAANmphUpBIDoDWZyxlL0AiOQD6KXOTeixEAXCBozBXM14197pCAXCYFKvb+LPGQzEDMKpeA8Desd4LyBIw3cK9VUG9FID9//WGQnDB3gUSCzAJgQFrhAPkGAvggtDi+jUwgQ0SC1CIMtrc+BI3FATKAdJHlK1kT77QvR/xvAhNRHtIRT8ffPnJ16F6F//P9ox5xYR7B5+sIVCON+UmtoENhdZiKR80j+gNypujb7HEYQqVDw+wgShv5+wFYZAj1qiGhML7CU35jO0WIBi6r2Cza7vf4cKdFrrPL5fQgjaIxriJzHd0NHnDB73j1YwwHQ7jp7AqNSNfcctd59Zl5xdOqnGdNM5slraEMb3RhLQ+gwjhMMWaMN8ocrj/PvENw1oU9X3iD5Siz1H9lZMJAAAAAElFTkSuQmCC'
                                alt=''
                            />
                            <span>Free consultation to coaches</span>
                        </div>
                        <div className='plan__feature'>
                            <img
                                src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhCAYAAABX5MJvAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHbSURBVHgBxZiNcYMwDIVFJ8gGZQQ2KBuUETxCNoANQieATtARkkyQdgJ3g4ygykFcdY4NNpjk3ekS4Fn+bHz+IYMIIWJJP28UBUcuHv9ynClOWZadIJWo4h1FTXHFOGkKBWtFSSpOtkY7WCJu/cGR0PRGa1pIkVtlCobuBbieqKNmT+0DuDgq38e0irylzy8AbnIZbIAWl3ZpAACpsQ2HScMDANRTAdikhaGDhAoFkL1gYHJIpCAANmphUpBIDoDWZyxlL0AiOQD6KXOTeixEAXCBozBXM14197pCAXCYFKvb+LPGQzEDMKpeA8Desd4LyBIw3cK9VUG9FID9//WGQnDB3gUSCzAJgQFrhAPkGAvggtDi+jUwgQ0SC1CIMtrc+BI3FATKAdJHlK1kT77QvR/xvAhNRHtIRT8ffPnJ16F6F//P9ox5xYR7B5+sIVCON+UmtoENhdZiKR80j+gNypujb7HEYQqVDw+wgShv5+wFYZAj1qiGhML7CU35jO0WIBi6r2Cza7vf4cKdFrrPL5fQgjaIxriJzHd0NHnDB73j1YwwHQ7jp7AqNSNfcctd59Zl5xdOqnGdNM5slraEMb3RhLQ+gwjhMMWaMN8ocrj/PvENw1oU9X3iD5Siz1H9lZMJAAAAAElFTkSuQmCC'
                                alt=''
                            />
                            <span>Access to Minibar</span>
                        </div>
                        <div className='plan__see-more'>
                            <span>See more benefits -></span>
                        </div>
                        <button className='plan__join-now'>Join now</button>
                    </div>
                </div>
                <div className='plan__card'>
                    <svg
                        width='15'
                        height='13'
                        viewBox='0 0 15 13'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path d='M9.01789 5.76762H8.26715V5.03093C8.26715 4.83555 8.18806 4.64816 8.04727 4.51001C7.90648 4.37185 7.71552 4.29424 7.51641 4.29424C7.3173 4.29424 7.12635 4.37185 6.98556 4.51001C6.84477 4.64816 6.76567 4.83555 6.76567 5.03093V5.76762H6.01493C5.81582 5.76762 5.62487 5.84524 5.48408 5.98339C5.34329 6.12155 5.26419 6.30893 5.26419 6.50431C5.26419 6.6997 5.34329 6.88708 5.48408 7.02523C5.62487 7.16339 5.81582 7.24101 6.01493 7.24101H6.76567V7.9777C6.76567 8.17308 6.84477 8.36046 6.98556 8.49862C7.12635 8.63678 7.3173 8.71439 7.51641 8.71439C7.71552 8.71439 7.90648 8.63678 8.04727 8.49862C8.18806 8.36046 8.26715 8.17308 8.26715 7.9777V7.24101H9.01789C9.217 7.24101 9.40796 7.16339 9.54875 7.02523C9.68954 6.88708 9.76864 6.6997 9.76864 6.50431C9.76864 6.30893 9.68954 6.12155 9.54875 5.98339C9.40796 5.84524 9.217 5.76762 9.01789 5.76762ZM13.6425 1.34746C12.8419 0.570035 11.7846 0.0989691 10.6613 0.0192671C9.53795 -0.0604348 8.42257 0.256476 7.51641 0.912815C6.56121 0.215636 5.37229 -0.100497 4.18907 0.0280747C3.00585 0.156647 1.91622 0.720375 1.1396 1.60574C0.362984 2.4911 -0.0429299 3.63233 0.00360011 4.79962C0.0501301 5.9669 0.545648 7.07353 1.39037 7.89666L5.89481 12.3537C6.31711 12.7675 6.88954 13 7.48638 13C8.08322 13 8.65566 12.7675 9.07795 12.3537L13.5824 7.89666C14.026 7.47133 14.3796 6.96416 14.6229 6.4043C14.8661 5.84443 14.9942 5.24291 14.9998 4.63432C15.0054 4.02572 14.8883 3.42203 14.6554 2.85796C14.4225 2.2939 14.0782 1.78056 13.6425 1.34746ZM12.5839 6.84319L8.07947 11.2633C8.00968 11.3324 7.92664 11.3872 7.83516 11.4246C7.74368 11.462 7.64555 11.4813 7.54644 11.4813C7.44734 11.4813 7.34921 11.462 7.25773 11.4246C7.16624 11.3872 7.08321 11.3324 7.01342 11.2633L2.50897 6.84319C1.92021 6.25262 1.59052 5.45929 1.59052 4.63311C1.59052 3.80694 1.92021 3.01361 2.50897 2.42304C3.10893 1.84178 3.91809 1.51585 4.76119 1.51585C5.6043 1.51585 6.41346 1.84178 7.01342 2.42304C7.08321 2.49208 7.16624 2.54689 7.25773 2.58429C7.34921 2.62169 7.44734 2.64095 7.54644 2.64095C7.64555 2.64095 7.74368 2.62169 7.83516 2.58429C7.92664 2.54689 8.00968 2.49208 8.07947 2.42304C8.67943 1.84178 9.48859 1.51585 10.3317 1.51585C11.1748 1.51585 11.984 1.84178 12.5839 2.42304C13.1772 3.01427 13.5097 3.81073 13.5097 4.64048C13.5097 5.47023 13.1772 6.2667 12.5839 6.85793V6.84319Z'></path>
                    </svg>
                    <h3>pro plan</h3>
                    <h1>$ 45</h1>
                    <div className='plan__features'>
                        <div className='plan__feature'>
                            <img
                                src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhCAYAAABX5MJvAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHbSURBVHgBxZiNcYMwDIVFJ8gGZQQ2KBuUETxCNoANQieATtARkkyQdgJ3g4ygykFcdY4NNpjk3ekS4Fn+bHz+IYMIIWJJP28UBUcuHv9ynClOWZadIJWo4h1FTXHFOGkKBWtFSSpOtkY7WCJu/cGR0PRGa1pIkVtlCobuBbieqKNmT+0DuDgq38e0irylzy8AbnIZbIAWl3ZpAACpsQ2HScMDANRTAdikhaGDhAoFkL1gYHJIpCAANmphUpBIDoDWZyxlL0AiOQD6KXOTeixEAXCBozBXM14197pCAXCYFKvb+LPGQzEDMKpeA8Desd4LyBIw3cK9VUG9FID9//WGQnDB3gUSCzAJgQFrhAPkGAvggtDi+jUwgQ0SC1CIMtrc+BI3FATKAdJHlK1kT77QvR/xvAhNRHtIRT8ffPnJ16F6F//P9ox5xYR7B5+sIVCON+UmtoENhdZiKR80j+gNypujb7HEYQqVDw+wgShv5+wFYZAj1qiGhML7CU35jO0WIBi6r2Cza7vf4cKdFrrPL5fQgjaIxriJzHd0NHnDB73j1YwwHQ7jp7AqNSNfcctd59Zl5xdOqnGdNM5slraEMb3RhLQ+gwjhMMWaMN8ocrj/PvENw1oU9X3iD5Siz1H9lZMJAAAAAElFTkSuQmCC'
                                alt=''
                            />
                            <span>8 hours of excercises</span>
                        </div>
                        <div className='plan__feature'>
                            <img
                                src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhCAYAAABX5MJvAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHbSURBVHgBxZiNcYMwDIVFJ8gGZQQ2KBuUETxCNoANQieATtARkkyQdgJ3g4ygykFcdY4NNpjk3ekS4Fn+bHz+IYMIIWJJP28UBUcuHv9ynClOWZadIJWo4h1FTXHFOGkKBWtFSSpOtkY7WCJu/cGR0PRGa1pIkVtlCobuBbieqKNmT+0DuDgq38e0irylzy8AbnIZbIAWl3ZpAACpsQ2HScMDANRTAdikhaGDhAoFkL1gYHJIpCAANmphUpBIDoDWZyxlL0AiOQD6KXOTeixEAXCBozBXM14197pCAXCYFKvb+LPGQzEDMKpeA8Desd4LyBIw3cK9VUG9FID9//WGQnDB3gUSCzAJgQFrhAPkGAvggtDi+jUwgQ0SC1CIMtrc+BI3FATKAdJHlK1kT77QvR/xvAhNRHtIRT8ffPnJ16F6F//P9ox5xYR7B5+sIVCON+UmtoENhdZiKR80j+gNypujb7HEYQqVDw+wgShv5+wFYZAj1qiGhML7CU35jO0WIBi6r2Cza7vf4cKdFrrPL5fQgjaIxriJzHd0NHnDB73j1YwwHQ7jp7AqNSNfcctd59Zl5xdOqnGdNM5slraEMb3RhLQ+gwjhMMWaMN8ocrj/PvENw1oU9X3iD5Siz1H9lZMJAAAAAElFTkSuQmCC'
                                alt=''
                            />
                            <span>Consultation of Private Coach</span>
                        </div>
                        <div className='plan__feature'>
                            <img
                                src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhCAYAAABX5MJvAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHbSURBVHgBxZiNcYMwDIVFJ8gGZQQ2KBuUETxCNoANQieATtARkkyQdgJ3g4ygykFcdY4NNpjk3ekS4Fn+bHz+IYMIIWJJP28UBUcuHv9ynClOWZadIJWo4h1FTXHFOGkKBWtFSSpOtkY7WCJu/cGR0PRGa1pIkVtlCobuBbieqKNmT+0DuDgq38e0irylzy8AbnIZbIAWl3ZpAACpsQ2HScMDANRTAdikhaGDhAoFkL1gYHJIpCAANmphUpBIDoDWZyxlL0AiOQD6KXOTeixEAXCBozBXM14197pCAXCYFKvb+LPGQzEDMKpeA8Desd4LyBIw3cK9VUG9FID9//WGQnDB3gUSCzAJgQFrhAPkGAvggtDi+jUwgQ0SC1CIMtrc+BI3FATKAdJHlK1kT77QvR/xvAhNRHtIRT8ffPnJ16F6F//P9ox5xYR7B5+sIVCON+UmtoENhdZiKR80j+gNypujb7HEYQqVDw+wgShv5+wFYZAj1qiGhML7CU35jO0WIBi6r2Cza7vf4cKdFrrPL5fQgjaIxriJzHd0NHnDB73j1YwwHQ7jp7AqNSNfcctd59Zl5xdOqnGdNM5slraEMb3RhLQ+gwjhMMWaMN8ocrj/PvENw1oU9X3iD5Siz1H9lZMJAAAAAElFTkSuQmCC'
                                alt=''
                            />
                            <span>Free Fitness Merchandises</span>
                        </div>
                        <div className='plan__see-more'>
                            <span>See more benefits -></span>
                        </div>
                        <button className='plan__join-now'>Join now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Plans;
