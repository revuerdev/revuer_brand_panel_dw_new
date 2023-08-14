import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { revuerTaskApproval } from "../../context/actions/task"
import { useEffect, useState } from "react";
import { NavLink as Link, useNavigate } from "react-router-dom";
import { toggleModal13 } from "../../services/edit-modal"
import { toast } from "react-toastify"
export const ResubmitModal = ({ status_title, message, onFailure, onSuccess, resubmitdata }) => {

    const dispatch1 = useDispatch();
    const [buttonHide, setButtonHide] = useState()
    let navigate1 = useNavigate();
    const resubmit =()=>{
        let selectedCount = 0;
        var remark_message1 = "";
        const checkboxes = document.querySelectorAll('.form-check-input');
        checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            remark_message1 += checkbox.value + "\n";
            selectedCount++;
        }
        });
        if (selectedCount < 2) {
        toast.error("Please select Atleast two reasons");
        return false;
        } 
        
        const pathname = window.location.pathname;
        const newpathname = pathname.split("/");
        const campaign_token = newpathname[3];
        const revuer_token = newpathname[4];
        const revuer_task_token = resubmitdata.revuer_task_token
        const approval_type = 5
        const task_button_type = 5
        const remark_message = resubmitdata.message
        const resubmitreason=remark_message1
        const resubmittaskcount = 1;
        
        dispatch1(revuerTaskApproval({ campaign_token: campaign_token, 
            revuer_token: revuer_token,
            revuer_task_token: revuer_task_token, 
            approval_type: approval_type,
            task_button_type: task_button_type, 
            remark_message: remark_message, 
            message:"Resubmited",
            resubmittaskcount:resubmittaskcount,
            resubmitreason:resubmitreason,
            setButtonHide }, navigate1))
            toggleModal13()
            setTimeout(function(){
               window.location.reload()
            },1000)
    }

    const approval =()=>{
        const pathname = window.location.pathname;
        const newpathname = pathname.split("/");
        const campaign_token = newpathname[3];
        const revuer_token = newpathname[4];
        const revuer_task_token = resubmitdata.revuer_task_token
        const approval_type = 1
        const task_button_type = 2
        const remark_message = resubmitdata.message
        const resubmittaskcount = 1;
        const  resubmitreason = resubmitdata.resubmitreason
        
        dispatch1(revuerTaskApproval({ campaign_token: campaign_token, 
            revuer_token: revuer_token,
            revuer_task_token: revuer_task_token, 
            approval_type: approval_type,
            task_button_type: task_button_type, 
            remark_message: remark_message, 
            resubmitreason:resubmitreason,
            message:"Resubmited",
            resubmittaskcount:resubmittaskcount,
            setButtonHide }, navigate1))
            toggleModal13()
            setTimeout(function(){
                window.location.reload()
            },1000)
    }
    

    return (
        <div className="fixed z-10 overflow-y-auto top-0 w-full left-0 hidden " id="modal1">
            <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed top-1/3 sm:inset-0 transition-opacity">
                    <div className="absolute inset-0 bg-gray-900 opacity-75" />
                </div>
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
                <div
                    className="inline-block align-center bg-white rounded-xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="modal-headline"
                >
                    <div className="bg-white px-8 pt-2 pb-4 sm:p-6 sm:pb-4">
                        <h5 className="text-2xl text-center mb-4 font-semibold">{status_title}</h5>
                        {resubmitdata?.resubmittaskcount == '' ||resubmitdata?. resubmittaskcount == undefined ? (
                            <>
                                <div className="form-group">
                                    <label>
                                        <input type="checkbox" className="form-check-input" value="You have mentioned wrong product details" />
                                        You have mentioned wrong product details
                                    </label>
                                </div>

                                <div className="form-group">
                                    <label>
                                        <input type="checkbox" className="form-check-input" value="You have mentioned price or another brand" />
                                        You have mentioned price or another brand
                                    </label>
                                </div>
                                <div className="form-group">
                                    <label>
                                        <input type="checkbox" className="form-check-input" value="Very short feedback, add more details" />
                                        Very short feedback, add more details
                                    </label>
                                </div>
                                <div className="flex justify-center">
                                <button className="bac-3 w-32 font-bold py-2 text-white text-xl m-1 sm:m-3 rounded-lg" onClick={onFailure}>Cancel</button>
                                <button className="bac-6 w-32 font-bold py-2 text-white text-xl m-1 sm:m-3 rounded-lg" onClick={resubmit}>Re Submit</button>
                            </div>
                            </>
                        ) : (
                            <>
                            <p>
                            You have already selected this feedback for re-submission. Either approve or reject this feedback
                            </p>
                            <div className="flex justify-center">
                                <button className="bac-3 w-32 font-bold py-2 text-white text-xl m-1 sm:m-3 rounded-lg" onClick={onFailure}>Reject</button>
                                <button className="bac-6 w-32 font-bold py-2 text-white text-xl m-1 sm:m-3 rounded-lg" onClick={approval}>Approve</button>
                            </div>
                            </>
                        )}

                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResubmitModal;
