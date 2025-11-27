const WebProject = () => {
    return(
        <div className='webp-container'>
            <div class="container text-center">
                <div className="webp-title">FitFound - React App</div>
                <div class="row">
                    <div className='webp-video-container'>
                        <video className="webp-video"
                            src='assests/projects/fit-found/fitfound-demo.mp4' 
                            autoPlay 
                            loop 
                            muted
                            controls
                        />
                    </div>
                </div>
                
                <div className="webp-description">
                    
                    <p>A movie and TV show browsing application that fetches up-to-date content from a real-time movie API. Users can explore trending titles, search for specific films or series, and view detailed metadata including ratings, descriptions, cast information, and more.
                    </p>
                    <p><i class="bi bi-code-square"></i><strong>Technologies:</strong></p>
                    <ul>
                        <li>React Native (JavaScript) with Expo Go</li>
                        <li>React Native Elements for UI components</li>
                        <li>React Native Safe Area Context for handling safe areas</li>
                        <li>React Navigation for app navigation</li>
                    </ul>
                    <p><i class="bi bi-cloud-download"></i><strong>External Resources:</strong>
                        <ul>
                            <li>
                                <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer">The Movie BD</a>
                            </li>
                        </ul>
                    </p>
                    <p><i class="bi bi-gear"></i><strong>Main Features:</strong></p>
                    <ul>
                        <li>Fetching list of movies base on the state</li>
                        <li>Search by movie or tv show name.</li>
                        <li>List TV Shows</li>
                        <li>See movie description and metadata such as title, image, popularity, and release date</li>
                    </ul>
                    <div>
                        <p><i class="bi bi-lightning"></i><strong>Feature Features and improvements:</strong></p>
                        <ul>
                            <li>General Layout and design.</li>
                            <li>Fetch more info about the movie.</li>
                            <li>Format of the texts in the select boxes.</li>
                        </ul>
                    </div>
                    <div>
                        <p><i class="bi bi-github"></i>
                            <strong><a 
                                href="https://github.com/sindyvaness/react-native-movie-app" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                >
                                Movies App - GitHub Repo
                            </a></strong>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WebProject;