import React from 'react';

type Props = {
    question: string;
    answer: string;
    callback: any;
    userAnswer: any;
    questionNumber: number;
    totalQuestions: number;
}

export const QuestionCard: React.FC<Props> = ({
    question, 
    answer, 
    callback, 
    questionNumber, 
    totalQuestions,
    userAnswer
}) => (
        <div>
            <p>Question: {questionNumber} / {totalQuestions}</p>
            <p dangerouslySetInnerHTML={{__html:question}}/>
            <div>
                <button disabled={userAnswer} onClick={callback}>
                    <span dangerouslySetInnerHTML={{__html: answer}}/>
                </button>
            </div>
        </div>
    );