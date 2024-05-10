import { FaMapMarkedAlt } from "react-icons/fa";
import React from 'react';
import Carousel from '../components/carousel';
import ClickPick from '../components/clickpic';
import SubNav from "../components/subnav";

const PlaceContent: React.FC = () => {
  return (
    <div className="flex-grow">
    <div className='pl-6' >
    <h1 className="text-4xl m-7 font-extrabold flex"><div className='pr-7'><FaMapMarkedAlt /></div>Places</h1>
    <div className='mb-8 ml-8 mr-8'>Memory Lane is a compassionate space designed with you in mind. As memory fades and familiar places become distant echoes, we offer a comforting virtual sanctuary where cherished memories can be revisited and celebrated.</div>
    <Carousel/>
    </div>
    <div className='text-3xl font-extrabold pl-10 pt-3 pb-4 mt-7 z-[1]'><SubNav
                                                                                mainButtonText="Memory Lane"
                                                                                parentText="Filter"
                                                                                submenu1Text="Recently Added"
                                                                                submenu2Text="Alphabetical order"
                                                                                item1Text="Add new"
                                                                                item3Text="Add new"
                                                                                />
            </div>
    <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-9 w-full max-w-screen-lg mx-auto">
        <ClickPick/>
        <ClickPick/>
        <ClickPick/>
        <ClickPick/>
        <ClickPick/>
        <ClickPick/>
        </div>
    </div>
</div>
  );
};

export default PlaceContent;