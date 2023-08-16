import React from 'react'

export const Createnav = ({name,link,className}) => {
  return (
    <>
        <li>
            <a className={className} href={link}>{name}</a>
        </li>
    </>
  )
}
