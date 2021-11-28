import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
const SingleStudentPreview: React.FC<{ name: string, uid: string, gmail: string, profileImg: string }> = ({ name, profileImg, gmail, uid }) => {

    function removeBottomLayer() {
        let bottomLayer = document.getElementById('signle-image-preview__details') as HTMLDivElement
        bottomLayer.style.display = 'none'
    }
    function addBottomLayer() {
        let bottomLayer = document.getElementById('signle-image-preview__details') as HTMLDivElement
        bottomLayer.style.display = 'block'
    }
    useEffect(() => {
        let studentPreviewer = document.getElementById('signle-image-preview')
        studentPreviewer?.addEventListener('mouseover', removeBottomLayer)!
        studentPreviewer?.addEventListener('mouseleave', addBottomLayer)!
    }, [])

    return (
        <div className="signle-image-preview__wrapper">
            <div className='signle-image-preview'>
                <Link href={`/student/${uid}`}>
                    <div id='signle-image-preview__img' className='signle-image-preview__img'>
                        {/* <Image layout='responsive' width='100%' height='100%' alt='https://images.unsplash.com/photo-1466657718950-8f9346c04f8f?dpr=1&auto=format&fit=crop&w=800&h=800&q=80&cs=tinysrgb' src='https://images.unsplash.com/photo-1466657718950-8f9346c04f8f?dpr=1&auto=format&fit=crop&w=800&h=800&q=80&cs=tinysrgb'>

                    </Image> */}
                        <img src={profileImg} alt={name} />

                    </div>
                </Link>

            </div>
            <div id='signle-image-preview__details' className='signle-image-preview__details'>
                <p>{name}</p>
                <p>gmail: {gmail}</p>
            </div>
        </div>

    )
}

export default SingleStudentPreview
