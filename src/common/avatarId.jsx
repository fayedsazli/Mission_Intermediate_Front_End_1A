const AvatarId = ({avatarImg}) =>{
    return(
        <div className="identity d-flex flex-row mb-2 d-flex gap-2">
            <img src={`/avatar/${avatarImg}`} alt="avatar" />
            <div className="name d-flex flex-column align-items-start ">
                <p className="fs-6 m-0">Jenna Ortega</p>
                <p className="fs-6 m-0 text-secondary">Senior Accountant di <span>Gojek</span></p>
            </div>
        </div>
    );
};

export default AvatarId;