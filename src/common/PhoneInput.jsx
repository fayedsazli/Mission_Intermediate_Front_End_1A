const PhoneInput = ({ label }) => {
    return (
        <div className="mb-3 text-start">
          <label htmlFor="basic-url" className="form-label">
            {label}
            <span className="text-danger"> *</span>
          </label>
      
          <div className="d-flex gap-2">
            {/* Input Group */}
            <div className="input-group w-25">
              <label className="input-group-text" htmlFor="inputGroupSelect01">
                <img
                  src="/icons8-indonesia-48.png"
                  className="img-fluid"
                  style={{ width: "20px", height: "20px" }}
                  alt="Indonesia Flag"
                />
              </label>
              <select className="form-select w-10   " id="inputGroupSelect01">
                <option selected>+62</option>
                <option value="1">+62</option>
                <option value="2">+63</option>
                <option value="3">+64</option>
              </select>
            </div>
      
            {/* Input Text */}
            <input type="text" className="form-control w-50" />
          </div>
        </div>
      );
      
      
      
};
export default PhoneInput;
