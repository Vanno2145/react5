import './../../MainStyles/MainCard.css'

function SecondCard(props) {
    return (
        <>
            <div className='main-sgrid-card'>
                <img src={props.img} />
                <div id='second' className='collection-comp'>
                    <span></span>
                    <p>наша нова коллекцiя</p>
                    <img className='collection-comp-img' src={'/MainCompImg/Straight.png'}></img>
                </div>
            </div>
        </>
    )
}

export default SecondCard