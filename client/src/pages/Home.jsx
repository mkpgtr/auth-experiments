import React, { useEffect, useState } from 'react'
import { Link, Outlet, useLoaderData, useLocation, useNavigation } from 'react-router-dom'
import { useHomeNavigation } from '../contexts/home-navigation/HomeNavigationContext'
import customFetch from '../utils/customFetch';

const homePageDataQuery = {
    queryKey : ['homePageData'],
    queryFn : ()=>customFetch.get('/dataRoutes/homepageData')
}

export const homePageDataLoader = (queryClient)=> async () => {


    // mock delay of 1000 second(s)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    const res = await queryClient.ensureQueryData(homePageDataQuery);
    return res.data;
  };

const Home = () => {
    const location = useLocation()


    const data = useLoaderData();

    const homePageData = data.data;

    console.log(homePageData)


    const [currentActiveLink, setCurrentActiveLink] = useState(homePageData?.navlinks.find((link)=>link.path === location.pathname.substring(1)))





    useEffect(()=>{
        console.log(currentActiveLink)
        setCurrentActiveLink(homePageData?.navlinks.find((link)=>link.path === location.pathname.substring(1)))
    },[location.pathname])


console.log(homePageData?.navlinks.find((link)=>link.path === location.pathname.substring(1)))
    


const {leftSide, rightSide} = currentActiveLink;


const {navlinks} = homePageData;



    
return (
    <div className='border border-red-600 min-h-screen grid grid-cols-2'>

        <div className="left border border-r-black flex flex-col">
            <div className="left__navbar flex-[0.2] border border-b-black flex items-center w-100">
                <div className="nav__links flex gap-4 justify-evenly w-[100%] font-semibold  lg:text-2xl">
                    {navlinks && navlinks.map((link)=>{
                        const isActive = link.path===currentActiveLink.path
                        if(link.path===''){
                            return <Link className={`${isActive && 'text-blue-600 font-bold'}`} to={`${''}`}>about</Link>
                        }
                        console.log(link.path, currentActiveLink.path)
                        return <Link className={`${isActive && 'text-blue-600 font-bold'}`} to={`${link.path}`}>{link.path}</Link>
                    })}
                    {/* <Link>Skills</Link>
                    <Link to='projects'>Projects</Link>
                    <Link>Interests</Link>
                    <Link>Background</Link>
                    <Link to='blog'>Blogs</Link> */}
                </div>
            </div>
            <div className="left__content flex flex-col flex-1">
                <div className="left__content--top flex-[0.3]">
                    <h3>{leftSide && leftSide?.current?.title}</h3>
                </div>
                <div className="left__content--bottom flex-1 border border-t-black">
                {leftSide && leftSide?.current?.description}
                </div>
            </div>

        </div>
        <div className="right flex flex-col">
            <div className="right__content flex-1">{<Outlet />}</div>
            <div className="right__footer flex-[0.2] border border-t-black flex gap-2 text-2xl justify-center items-center">
                {
                    homePageData.footer.footerLinks.map((link)=>{
                        return <Link to={link.path} className={`font-semibold`} style={
                            {color : link.color}
                        }>{link.title}</Link>
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Home