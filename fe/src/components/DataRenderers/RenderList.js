import React from 'react'
import { ListGroup } from 'react-bootstrap'
import isNil from 'lodash/isNil'
import { categoryListItem, regularListItem } from './Item'
import {KEY} from "../../constants";

// FIXME: when data will change to actual, update parsing
const RenderList = props => {
  let list = props.data
  if (isNil(list.categories) || isNil(list.items)) {
    return <p />
  }
  if (list.categories.length < 1 && list.items.length < 1)
    return (
      <p>
        Your search has no results. Probably, we will make this page looks
        better
      </p>
    )

  if (list.items.length < 1) return <p>Looks like, there is no items</p>

  return (
    <ListGroup id={'render-list'}>
      {list.categories.map(e => categoryListItem(e, onClick))}
      {list.items.map(e => regularListItem(e, onClick))}
    </ListGroup>
  )
}

const onClick = e => {
  // TODO: add hit counter
  e.preventDefault()
  let storage = []
  if (JSON.parse(localStorage.getItem(KEY)) !== null) {
    storage = JSON.parse(localStorage.getItem(KEY))
  }
  if (!isNil(e) && !isNil(e.target) && !isNil(e.target.innerText)) {
    storage.push(e.target.innerText)
  }
  localStorage.setItem(KEY, JSON.stringify(storage))
}

export default RenderList