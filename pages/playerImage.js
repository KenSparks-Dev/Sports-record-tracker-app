import Image from 'next/image'

function PlayerImages() {
    return (
        <div>
            {['lebron'].map((path) => {
                return (
                    <div key={path}>
                        <Image src={`/${path}.jpg`} alt='Player' width='280' height='420'/>
                    </div>
                )
            })}
        </div>
    )
}

export default PlayerImages