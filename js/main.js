//Array of projects
const projects =[
    {
        title: 'workspace' ,
        discription: "A showcase of my first prroject" ,
        url:"https://www.figma.com/proto/aDSrp7yKe7iFN5SlCO1a3A/Waste-Application?page-id=125%3A1922&node-id=167-560&node-type=frame&viewport=-615%2C-336%2C0.53&t=FssTLEyRca0qzyWs-1&scaling=contain&content-scaling=fixed" 
    },
    {
        title: 'workspace' ,
        discription: "A showcase of my first prroject" ,
        url:"https://www.figma.com/proto/aDSrp7yKe7iFN5SlCO1a3A/Waste-Application?page-id=125%3A1922&node-id=167-560&node-type=frame&viewport=-615%2C-336%2C0.53&t=FssTLEyRca0qzyWs-1&scaling=contain&content-scaling=fixed" 
    },
   {
        title: 'workspace' ,
        discription: "A showcase of my first prroject" ,
        url:"https://www.figma.com/proto/aDSrp7yKe7iFN5SlCO1a3A/Waste-Application?page-id=125%3A1922&node-id=167-560&node-type=frame&viewport=-615%2C-336%2C0.53&t=FssTLEyRca0qzyWs-1&scaling=contain&content-scaling=fixed" 
    },

    {
        title: 'workspace' ,
        discription: "A showcase of my first prroject" ,
        url:"https://www.figma.com/proto/aDSrp7yKe7iFN5SlCO1a3A/Waste-Application?page-id=125%3A1922&node-id=167-560&node-type=frame&viewport=-615%2C-336%2C0.53&t=FssTLEyRca0qzyWs-1&scaling=contain&content-scaling=fixed" 
    },

    {
        title: 'workspace' ,
        discription: "A showcase of my first prroject" ,
        url:"https://www.figma.com/proto/aDSrp7yKe7iFN5SlCO1a3A/Waste-Application?page-id=125%3A1922&node-id=167-560&node-type=frame&viewport=-615%2C-336%2C0.53&t=FssTLEyRca0qzyWs-1&scaling=contain&content-scaling=fixed" 
    },
    {
        title: 'workspace' ,
        discription: "A showcase of my first prroject" ,
        url:"https://www.figma.com/proto/aDSrp7yKe7iFN5SlCO1a3A/Waste-Application?page-id=125%3A1922&node-id=167-560&node-type=frame&viewport=-615%2C-336%2C0.53&t=FssTLEyRca0qzyWs-1&scaling=contain&content-scaling=fixed" 
    },
    {
        title: 'workspace' ,
        discription: "A showcase of my first prroject" ,
        url:"https://www.figma.com/proto/aDSrp7yKe7iFN5SlCO1a3A/Waste-Application?page-id=125%3A1922&node-id=167-560&node-type=frame&viewport=-615%2C-336%2C0.53&t=FssTLEyRca0qzyWs-1&scaling=contain&content-scaling=fixed" 
    },
    {
        title: 'workspace' ,
        discription: "A showcase of my first prroject" ,
        url:"https://www.figma.com/proto/aDSrp7yKe7iFN5SlCO1a3A/Waste-Application?page-id=125%3A1922&node-id=167-560&node-type=frame&viewport=-615%2C-336%2C0.53&t=FssTLEyRca0qzyWs-1&scaling=contain&content-scaling=fixed" 
    },
];
//function to load projects
function loadProjects() {
    const projectList = document.getElementById('project-list');

    projects.forEach((project)=> {
        const projectCard = document.createElement('div');
        projectCard.className ='project-card';

        projectCard.innerHTML = `
        <h2>${project.title}</h2>
        <p>${project.description}</p>
        <iframe src="$ {project.url}" title="${project.title}"class="project-iframe"></iframe>
         `;

         projectList.appendChild(projectCard);

    
    });
}

//load project when DOM is fully loaded
document.addEventListener("DOMContentLoaded" , loadProjects);
 
    