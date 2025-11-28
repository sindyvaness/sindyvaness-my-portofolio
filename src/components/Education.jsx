const Education = () => {
    return(
        <div className="education" id="education">
            <h2 className="subtitles">Education</h2>
            <div>
                <ul class="list-group list-group-flush education-list">
                    <li class="list-group-item">
                        <p class="fw-bold edu-info">Post-Degree Diploma in Web and Mobile App Development</p>
                        <p class="fw-medium .fs-5 text edu-info">Langara College, Vancouver, British Columbia, Canada.</p>
                        <p class="fw-lighter fs-6 edu-info">May 2024 - Dec 2025</p>
                    </li>
                    <li class="list-group-item">
                        <p class="fw-bold edu-info">Master's Degree in Systems Engineering</p>
                        <p class="fw-medium .fs-5 text edu-info">Politécnico Grancolombiano, Bogota, Colombia.</p>
                        <p class="fw-lighter fs-6 edu-info">Jan 2019 – Sep 2023</p>
                    </li>
                    <li class="list-group-item">
                        <p class="fw-bold edu-info">Bachelor’s Degree in Systems Engineer</p>
                        <p class="fw-medium .fs-5 text edu-info">Universidad Nacional Experimental de la Fuerza Armada Nacional (UNEFA), Caracas, Venezuela.</p>
                        <p class="fw-lighter fs-6 edu-info">Jan 2005 – Dec 2010</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Education;