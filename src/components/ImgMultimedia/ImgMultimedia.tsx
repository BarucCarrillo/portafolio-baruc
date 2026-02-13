import './img-multimedia.scss'

interface ImgMultimediaProps {
    img1?: string;
    img2?:string;
}

export const ImgMultimedia = ({ img1 = 'https://placehold.co/800x300', img2 = "https://placehold.co/800x300"}: ImgMultimediaProps) => {
    return(
        <div className='section-img-multimedia'>
            <img src={img1} alt="" className='img'/>
            <img src={img2} alt="" className='img'/>
        </div>
    );
}