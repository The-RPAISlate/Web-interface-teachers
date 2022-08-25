// Components
import Navbar from "../Components/Navbar";
import ClassInfo from "../Components/ClassInfo";
import Card from "../Components/Card";

import "./pages.css";

const Home = (props) => {

    return (<>

        <Navbar 
            logo_path={props.logo_path}
            school_name={props.school_name}
            dropdownTitle="Subjects"
            dropdownData={props.subjects}
        />

        <ClassInfo 
            class={props.class_num}
            teacher={props.teacher}
        />

        <div className="cards-container">
            {props.subjects &&

            props.subjects.map(
                subject => {
                    return <Card 
                                key={subject.url}
                                name={subject.name}
                                url={subject.url}
                            />
                }
            )
            }
        </div>
    </>);
}

export default Home;