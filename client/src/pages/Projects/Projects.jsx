import { useQueryClient } from '@tanstack/react-query'
import React from 'react'

const Projects = () => {
    const queryClient = useQueryClient()

    const cachedData = queryClient.getQueryData(['homePageData'])
    console.log(cachedData.data.data)

    const {navlinks} = cachedData.data.data;

    const projectData = navlinks.filter((link)=>link.path === 'projects')
    console.log(projectData)

    const {rightSide} = projectData[0];

    console.log(rightSide)

    const [projectsState,setProjectsState] = React.useState({fetchedData:projectData[0],activeProjectNavLink:projectData[0].rightSide.nav[0]})

    console.log(projectsState)
    
    
  return (
    <div className='flex flex-col bg-red-200 h-[100%]'>
        <div className="projects__heading justify-between flex-[0.1] border border-b-black flex items-center text-2xl font-semibold px-4">
            <h1>Projects</h1>
            <h3>{projectsState?.activeProjectNavLink?.topic}</h3>
        </div>
        <div className="topProjects__container flex-1 flex">
            <div className="topProjects__container--left flex-[0.2] border border-r-black flex flex-col justify-evenly text-xl text-center font-bold">
                {
                    rightSide.nav.map((link)=>{
                        const isActive = link.id === projectsState.activeProjectNavLink.id
                        
                        return <h3

                        onClick={()=>{
                            setProjectsState((prev)=>({...prev,activeProjectNavLink:link}))
                        
                        }}
                        style={{
                            backgroundColor:isActive&&'#000',
                            color:isActive&&'#fff'
                        
                        }}
                        className=' p-2 cursor-pointer'
                        
                        key={link.id}>{link.topic}</h3>
                    })
                }
            </div>
            <div className="topProjects__container--right flex-1 flex">
                <div className="project__one flex-1 border border-r-black">{projectsState?.activeProjectNavLink?.projectOne?.topic}</div>
                <div className="project_two flex-1">Project Two</div>
            </div>
        </div>
        <div className="projects__footer flex-[0.2] border border-t-black flex justify-end items-center">
            <button className='px-4 text-2xl bg-blue-600 text-white rounded-xl mx-4  py-2 border border-black'>Show all</button>
            </div>
    </div>
  )
}

export default Projects