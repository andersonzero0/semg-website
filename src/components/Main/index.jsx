import { useState, useEffect } from 'react';
import CardUser from '../CardUser';
import './style.css';

export default function Main() {

    const [students, setStudents] = useState([{}]);
    const [groupedStudents, setGroupedStudents] = useState([]);

    useEffect(() => {

        fetch("https://api-semg.vercel.app/")
        .then(response => response.json())
        .then(data => {

            setStudents(data);

        });
        
    }, []);

    useEffect(() => {

        const groups = students.reduce((acc, student) => {
            const group = acc.find(g => g.turma === student.turma);
            if (group) {
                group.students.push(student);
            } else {
                acc.push({ turma: student.turma, students: [student] });
            }
            return acc;
        }, []);

        setGroupedStudents(groups);

    }, [students]);

    return (
        <main className='main'>

            {groupedStudents.map(group =>
                <div className='group'>
                    <h2 className='nameTurma'>{group.turma}</h2>
                    {group.students.map(student =>
                        <CardUser avatar={student.avatar} name={student.name} turma={student.turma} status={student.status}/>
                    )}
                </div>
            )}

        </main>
    );
    
}