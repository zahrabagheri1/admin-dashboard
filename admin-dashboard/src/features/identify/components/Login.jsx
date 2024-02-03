import React from 'react';
import logo from '../../../assets/images/bluebird.png';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className='main d-flex justify-content-center w-100'>
            <main className="content d-flex p-0">
                <div className='container d-flex-colum'>
                    <div className="roe h-100">
                        <div className="col-sm-10 col-md8 col-lg-6 mx-auto d-table h-100">
                            <div className="d-table-cell align-middle">
                                <div className="text-center mt-4">
                                    <img src={logo} alt="logo panel admin" srcset="" style={{ height: "150px" }} />
                                    <h1 className="h2">پلتفرم آموزش آنلاین</h1>
                                    <div className="lead">جهت ورود لازم است از طریق موبایل و رمز عبور خود اقدام کنید</div>
                                    <div className="lead"> قبلا ثبت نام نکرده اید؟
                                        {/* <Link to={'/register'} className='me-2'> ثبت نام کنید </Link> */}
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-body">
                                        <div className="m-sm-4">
                                            <form>
                                                <div className="mb-3">
                                                    <label className="form-label">موبایل</label>
                                                    <input className="form-control form-control-lg" />
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label">رمز عبور</label>
                                                    <input
                                                        className="form-control form-control-lg mb-2"
                                                        type="password"
                                                    />
                                                </div>
                                                <div className="text-center mt-3">
                                                    <button type="submit" className="btn btn-lg btn-primary">
                                                        وارد شوید
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Login