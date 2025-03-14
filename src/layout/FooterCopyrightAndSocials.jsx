import Socials from "../common/Socials";

const FooterCopyrightAndSocials = () => {
    return(
        <div className="d-flex justify-content-between">
            <p className="text-secondary fw-semibold" >@2023 Gerobak Sayur All Rights Reserved.</p>
            <Socials />
        </div>
    );
};

export default FooterCopyrightAndSocials;