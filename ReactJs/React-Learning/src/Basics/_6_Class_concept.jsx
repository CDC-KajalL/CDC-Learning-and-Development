import React from 'react';
import Btn from './_1_Button';
import { IoIosStar, IoIosStarOutline } from 'react-icons/io';

class Universal extends React.Component {
    constructor(props) {
        super(props); //Calls the constructor of the parent class (i.e., React.Component).
        this.state = { rating: 0 };
    }

    handleStarClick = (value) => {
        this.setState({ rating: value });
    };

    render() {
        const { rating } = this.state; 

        return (
            <div>
                <form>
                    <div className = "flex flex-row">
                    {[...Array(5)].map((_, index) => (
                        <span key={index} onClick={() => this.handleStarClick(index + 1)}>
                            {index < rating ? (
                                <IoIosStar className="text-orange-500 cursor-pointer" />
                            ) : (
                                <IoIosStarOutline className="text-orange-500 cursor-pointer" />
                            )}
                        </span>
                    ))}
                    </div>

                </form>
            </div>
        );
    }
}

export default Universal;
