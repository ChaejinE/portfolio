$(document).ready(() => {
    render_projects('featured');
})


let render_projects = (slug) => {
    let projects_area = $('.projects-wrapper');

    $('.white-button').removeClass('white-button-hover');
    $(`#${slug}`).addClass('white-button-hover');

    let projects_obj = [
        {
            image: 'assets/images/mentors.jpg',
            link: 'https://github.com/abhn/Mporter',
            title: '시료 불량 검출 DL Model 개발',
            demo: 'https://mporter.co',
            technologies: ['Python', 'Tensorflow2', 'Segmentation'],
            description: "먼지 검출용 Deep Learning Model 개발 및 광학 H/W 선정",
            categories: ['MachineVision']
        },
        {
            image: 'assets/images/mobile-landscape.jpg',
            link: 'https://github.com/abhn/Wall-E',
            title: '미성형 및 너트 삽입 불량',
            demo: 'http://wall-e-jekyll.github.io/',
            technologies: ['Python', 'OpenCV', 'Histogram', 'HSV'],
            description: "색상 검출을 통한 미성형 및 너트 삽입 불량 검출 S/W 개발",
            categories: ['MachineVision']
        },
        {
            image: 'assets/images/collage.jpg',
            link: 'https://github.com/abhn/Marvel',
            title: '자동 물류 운반 AMR 시뮬레이션',
            demo: false,
            technologies: ['Python', 'ROS1', 'Issac-sim'],
            description: "HancomAcademy 프로젝트, 물류 운반 AMR의 자율 주행 및 대기, 화물 인지, 적재 시나리오 수행",
            categories: ['AutonomousDriving']
        },
        {
            image: 'assets/images/mpw.jpg',
            link: 'https://github.com/abhn/mpw',
            title: 'Camera 기반 3D Position Estimation',
            demo: 'https://www.nagekar.com/mpw',
            technologies: ['Cpp', 'ROS2'],
            description: "Object Detection Bounding Box의 좌표를 통해 Object의 Position(u, v)을 로봇 Baselink 기준 3D Position(x,y,z) 추정",
            categories: ['AutonomousDriving']
        },
        {
            image: 'assets/images/social-share-count.jpeg',
            link: 'https://github.com/abhn/Social-Share-Counts',
            title: 'Model Training with Mlflow + Azure',
            demo: false,
            technologies: ['Python', 'Mlflow', 'Azure'],
            description: "Mlflow + Azure를 이용한 학습 paramaeter, model 저장 및 공유 Basic Pipeline 개발",
            categories: ['MLOps']
        },
        {
            image: 'assets/images/data-destroyer.png',
            link: 'https://github.com/abhn/data-destroyer-gui',
            title: 'AutoLabeling System with CVAT + nuclio',
            demo: false,
            technologies: ['Python', 'cvat', 'nuclio'],
            description: "Custom Model로 cvat에서 AutoLabeling System 구축",
            categories: ['MLOps']
        },
        {
            image: 'assets/images/raspberry-pi-monitor.png',
            link: 'https://github.com/abhn/RPi-Status-Monitor',
            title: 'Data Extractor',
            demo: false,
            technologies: ['python', 'django', 'vue.js'],
            description: "Image Data 추출을 위한 백오피스 웹 Tool 개발",
            categories: ['MLOps']
        },
    ]

    let projects = [];
    if(slug == 'all') {
        projects = projects_obj.map(project_mapper);
    } 
    else {
        projects = projects_obj.filter(project => project.categories.includes(slug)).map(project_mapper);
    }
    projects_area.hide().html(projects).fadeIn();
}

let project_mapper = project => {
    return `
        <div class="wrapper">
                
            <div class="card radius shadowDepth1">

                ${project.image ? 
                    `<div class="card__image border-tlr-radius">
                        <a href="${project.link}">
                            <img src="${project.image}" alt="image" id="project-image" class="border-tlr-radius">
                        </a>
                    </div>`           
                : ''}

        
                <div class="card__content card__padding">
        
                    <article class="card__article">
                        <h2><a href="${project.link}">${project.title}</a></h2>
        
                        <p class="paragraph-text-normal">${project.description} ${project.demo ? `<a href="${project.demo}">Demo</a>` : ''}</p>
                    </article>

                                
                    <div class="card__meta">
                        ${project.technologies.map(tech =>
                            `<span class="project-technology paragraph-text-normal">${tech}</span>`
                        ).join('')}
                    </div>

                </div>
            </div>
        </div>
    `
}

let selected = (slug) => {
    render_projects(slug);
}