import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from './Affairs.module.css'

type AffairsPropsType = { // need to fix any
    data: AffairType[]
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (id: number) => void
    filter: FilterType
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair
            key={a._id}
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    /* const setAll = () => {props.setFilter('all')}
     const setHigh = () => {props.setFilter('high')}
     const setMiddle = () => {props.setFilter('middle')}
     const setLow = () => {props.setFilter('low')}*/

    const setClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        props.setFilter(e.currentTarget.value as FilterType)
    }
    const setClass = (filter: FilterType) => {
  return s.button + (props.filter === filter ? ''+ s.active : "")
    }
    return (
        <div>

            {mappedAffairs}
            <button onClick={setClick} className={setClass('all')} value={'all'}>All</button>
            <button onClick={setClick} className={setClass('high')} value={'high'}>High</button>
            <button onClick={setClick} className={setClass('middle')} value={'middle'}>Middle</button>
            <button onClick={setClick} className={setClass('low')} value={'low'}>Low</button>

        </div>
    )
}

export default Affairs
