import { FaMapMarkedAlt } from "react-icons/fa";
import React from 'react';
import Carousel from '../components/carousel';
import ClickPick from '../components/clickpic';
import SubNav from "../components/subnav";



const PlaceContent: React.FC = () => {

  const [relatedPlace, setRelatedPlace] = useState([{name:"",relation:"",occupation:"",description:""}]);
  const [originalPlace, setOriginalPlace] = useState([]);

  useEffect(() => {
      const fetchData = async () => {
          try {
              const url = `http://127.0.0.1:8000/get/place?email=sh33thal24@gmail.com&first_name=Sheethal&last_name=Joshi%20Thomas`;
              const response = await fetch(url);
              if (!response.ok) {
                  throw new Error('Network response was not ok');
              }
              const data = await response.json();
              console.log(data);
              setRelatedPeople(data);
              setOriginalPeople(data);
          } catch (error) {
              console.error('Error fetching data:', error);
          }
      };
  
      fetchData();
  }, []);



  return (
    <div className="flex-grow">
    <div className='pl-6' >
    <h1 className="text-4xl m-7 font-extrabold flex"><div className='pr-7'><FaMapMarkedAlt /></div>Places</h1>
    <div className='mb-8 ml-8 mr-8'>Memory Lane is a compassionate space designed with you in mind. As memory fades and familiar places become distant echoes, we offer a comforting virtual sanctuary where cherished memories can be revisited and celebrated.</div>
    <Carousel/>
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