import React from 'react';

const QuestionOption = ({answer, num, onClick}) => {
    return (
        <button className='p-5 block w-full text-left text-stone-700 border-b border-stone-700 border-opacity-20 cursor-pointer bg-[#fff] transition hover:bg-[#f8f8f8]' onClick={onClick}>
            {num+1}. {answer}
        </button>
    );
};

export default QuestionOption;