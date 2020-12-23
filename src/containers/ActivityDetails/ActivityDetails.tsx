import Button from 'components/Button';
import React from 'react'
import styled from 'styled-components';

const ActivityDetails = () => {
    return (
        <Div>
            <div className="row mb-4">
                <label htmlFor='title' className="col-sm-2 col-form-label">Title</label>
                <div className="col-sm-7">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, debitis.</p>
                </div>
            </div>
            <div className="row mb-2">
                <label htmlFor='description' className="col-sm-2 col-form-label">Description</label>
                <div className="col-sm-7">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima voluptatibus eius ducimus necessitatibus doloribus inventore, atque commodi dolorem, ipsum pariatur, fuga magnam quod labore ut in! Veniam quaerat reprehenderit qui ad, fugiat, esse ipsa illo perferendis porro, optio doloremque aliquam cum aperiam laudantium corporis nulla tempore iste in culpa vitae.</p>
                </div>
            </div>
            
            <br/><hr/><br/>

            <div className="row mb-4">
                <label htmlFor='start' className="col-sm-2 col-form-label">Start at</label>
                <div className="col-sm-7">
                    <p>08:22 AM</p>
                </div>
            </div>
            <div className="row mb-4">
                <label htmlFor='start' className="col-sm-2 col-form-label">End at</label>
                <div className="col-sm-7">
                    <p>11:50 AM</p>
                </div>
            </div>
            <div className="row mb-2">
                <label htmlFor='start' className="col-sm-2 col-form-label">Total</label>
                <div className="col-sm-7">
                    <p>3h 28m</p>
                </div>
            </div>

            {/* <br/><hr/><br/>

            <div className="row mb-4">
                <label htmlFor='attachment' className="col-sm-2 col-form-label">Attachment</label>
                <div className="col-sm-7">
                    
                </div>
            </div> */}

            <br/><br/>

            <Button variant='solid' size='large' color='primary'>
                Edit Activity
            </Button>
            
        </Div>
    )
}

export default ActivityDetails;

const Div = styled.div`

`
