export const homePageData = {
    navlinks : [
        {
            id : 0,
            path : '',
            rightSide : {

            },
            leftSide : {
                current : {
                    title : 'About',
                    description : 'About Manish Kashyap Panda'
                }
            }
        },
        {
            id : 1,
            path : 'skills',
            rightSide : {

            },
            leftSide : {
                current : {
                    title : 'Skills',
                    description : 'I am skilled in react,typescript,nodejs,express,mongodb,css flex & grid'
                }
            }
        },
        {
            id : 2,
            path : 'projects',
            rightSide : {
                nav : [
                    {
                        id : 1,
                        topic : 'Responsive Layouts',
                        projectOne : {
                            id : 1,
                            topic : 'Mobile First Landing Page'
                    }
                    },
                    {
                        id  : 2,
                        topic : 'Frontend Projects',

                    },
                    {
                        id : 3,
                        topic : 'Fullstack Projects'
                    }
                ],
                header : {
                    title : 'Projects',
                    titleSecondary : 'Project Category'
                },
                projectOne : {

                },
                projectTwo : {

                },
                footer :{
                    
                }
            },
            leftSide : {
                current : {
                    title : 'Twitter Clone',
                    description : 'Fullstack project built using MERN stack'
                }
            }
        },
        {
            id : 3,
            path : 'blog',
            leftSide : {
                current : {
                    title : 'Blog',
                    description : 'This is a blog'
                }
            }
        
        },
        {
            id : 4,
            path : 'interests',
            leftSide : {
                current : {
                    title : 'Interests',
                    description : 'My interests include reading, writing and coding.'
                }
            },
            rightSide : {

            }
        },
        {
            id : 5,
            path : 'background',
            leftSide : {
                current : {
                    title : 'Background',
                    description : 'I am a software developer'
                }
            },
            rightSide : {

            }
        
        },
       
    ],
    footer : {
        footerLinks : [
            // generate objects work, contact, tech stack, secret-zone
            {
                id : 1,
                title : 'work',
                color : 'black'
            },
            {
                id : 2,
                title : 'contact',
                color : 'green'
            },
            {
                id : 3,
                title : 'tech-stack',
                color : 'blue'
            },
            {
                id : 4,
                title : 'secret-zone',
                color : 'red',
                path : '/custom/secret-zone'
            }


        ],
        text : 'this is footer text'
    }
}