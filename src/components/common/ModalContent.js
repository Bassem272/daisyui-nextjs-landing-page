// components/ModalContent.js
import React from 'react';
import { MODAL_BODY_TYPES } from '@/utils/globalConstantUtil';
import SignInModalBody from './SignInModalBody';
import SignUpModalBody from './SignUpModalBody';

function ModalContent({ bodyType, closeModal, extraObject }) {
    switch (bodyType) {
        case MODAL_BODY_TYPES.SIGN_IN_MODAL:
            return <SignInModalBody closeModal={closeModal} extraObject={extraObject} />;
        case MODAL_BODY_TYPES.SIGN_UP_MODAL:
            return <SignUpModalBody closeModal={closeModal} extraObject={extraObject} />;
        default:
            return null;
    }
}

export default ModalContent;
