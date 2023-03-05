import "./EditSong.css";
import { AiOutlinePlayCircle } from 'react-icons/ai';
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { putSong } from "../../../actions/asyncActions/putActions";
import { closeEdit } from "../../../actions/updateAction";

//prop here is a complete song obj in props.songdet
const EditSong = (props) => {
    //let data = props.data;
    let sdet = props.songdet;
    let disable = "disabled";
    //accessing state
    let artistList = useSelector(state => state.Artist.artists); 
    let genreList = useSelector(state => state.Genre.genres); 

    //creating dispatcher
    let dispatch = useDispatch();
    let SongSchema = Yup.object().shape({
        album: Yup.string()
            .min(2, 'Too Short!')
            .max(70, 'Too Long!')
            .required('Album/Movie Name is Required'),
        
      });

    const formik = useFormik({
        initialValues:{
            album: sdet.album,
            song: sdet.song,
            duration: sdet.duration,
            singer: sdet.singer[0],
            singername: '',
            release_date: sdet.release_date,
            genre: sdet.genre,
            genrename: '',
            plays: sdet.plays,
            id: sdet.id
        },
        validationSchema: SongSchema,
        onSubmit: (values) => {
            submitSong(values)
        }
    });

    window.addEventListener('beforeunload', (event) => {
        event.returnValue = `Are you sure you want to leave?`;
    });

    window.addEventListener('beforeunload', (event) => {
        if (formik.dirty) {
          event.returnValue = 'You have unfinished changes!';
        }
    });


    const submitSong = (values) => {
        //creating udated song obj.
        let obj = {
            ...props.songdet,
            album: values.album,
            song: values.song,
            duration: values.duration,
            singer: [values.singer],
            release_date: values.release_date.getDate() + "/" + (parseInt(values.release_date.getMonth())+1) + "/" + values.release_date.getFullYear(),
            genre: values.genre,
            plays: values.plays,
            id: values.id
        }
        //testing put method/action
        console.log(obj);
        dispatch(putSong(obj));
    }

    const changeEditStatus = () => {
        dispatch(closeEdit())
    }

    return(
        <>
            <div className="cardnew">
                <a href="#">
                    <img src="SongArt.png" className="card-img-top" alt="..."/>
                    <div>
                        <span className="play_icon"><AiOutlinePlayCircle/></span>
                    </div>
                </a>
                <div className="card-body">
                    <div className="highlight">
                        <a href="#" className="card-title">{sdet.song}</a>
                    </div>
                    <form onSubmit={formik.handleSubmit}>
                        <label htmlFor="song">Song Name</label>
                        <input 
                            name="song"
                            id="song"
                            placeholder="Song"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.song}
                        />
                        {formik.errors.song && formik.touched.song ? <div className="error">{formik.errors.song}</div> : null}

                        <label htmlFor="album">Album Name</label>
                        <input 
                            name="album"
                            id="album"
                            placeholder="album"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.album}
                        />
                        {formik.errors.album && formik.touched.album ? <div className="error">{formik.errors.album}</div> : null}
                        <br></br>
                        <label htmlFor="singer">Singer Name</label>  
                        <select 
                            name="singer" 
                            id="singer" 
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.singer}>
                            {artistList.map((artist, index) => {
                                    return(
                                        <option key={artist.id} value={artist.id}>{artist.ArtistName}</option>
                                    )
                                }
                            )}
                            <option key="0"  value="other">Other</option>
                        </select>
                        <input 
                            name="singername"
                            id="singername"
                            placeholder="new singer"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.singername}
                            disabled
                        />
                        
                        <br></br>
                        <label htmlFor="genre"> Genre :</label>
                        <select 
                            name="genre" 
                            id="genre" 
                            from="carform" 
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.genre}>
                            {genreList.map((genre, index) =>{ 
                                        return(
                                            <option key={genre.id} value={genre.id}>{genre.GenreName}</option>
                                        )
                                    }
                                )}
                            <option key="0"  value="other">Other</option>
                        </select>
                        <input 
                            name="genrename"
                            id="genrename"
                            placeholder="new genre"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.genrename}
                            disabled
                        />
                        <button type="submit">  Submit  </button>
                        <button onClick={changeEditStatus}>Close</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default EditSong;