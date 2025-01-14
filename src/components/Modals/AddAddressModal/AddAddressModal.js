import { createRef, useRef, useState, useMemo } from 'react'
import cn from 'classnames'

import { resolveUDomain } from 'lib/unstoppableDomains'
import { resolveENSDomain } from 'lib/ensDomains'

import { useModals } from 'hooks'
import { Modal, TextInput, Button, ToolTip } from "components/common"

import styles from './AddAddressModal.module.scss'

const AddAddressModal = ({ title, inputs, selectedNetwork, onClose }) => {
    const { hideModal } = useModals()
    const [isDisabled, setDisabled] = useState(true)
    const [uDAddress, setUDAddress] = useState('')
    const [ensAddress, setEnsAddress] = useState('')
    const timer = useRef(null)

    const inputsFields = useMemo(() => inputs.map(input => ({ ...input, ref: createRef() })), [inputs])
    const getUDomain = async (value) => {
        return await resolveUDomain(value, null, selectedNetwork.unstoppableDomainsChain)
    }

    const onInput = () => {
        if (timer.current) {
            clearTimeout(timer.current)
        }

        const validateForm = async () => {
            const isFound = inputsFields.find(item => item.inputType === 'address')
            const domain = isFound && isFound.ref && isFound.ref.current.value
            if (!domain) return
            
            let uDAddr = null
            let ensAddr = null
            if (isFound) {
                uDAddr = await getUDomain(domain)
                ensAddr = await resolveENSDomain(domain)
                timer.current = null
                if (uDAddr) setUDAddress(uDAddr)
                else if (ensAddr) setEnsAddress(ensAddr)
            }

            const isFormValid = inputsFields
                .map(({ ref, validate, inputType }) => {
                    const isUDField = inputType === 'address'
                    const value = isUDField && uDAddr ? uDAddr : isUDField && ensAddr ? ensAddr : ref.current.value
                    if (!validate) return !!value

                    return validate(value)
                })
                .every(v => v === true)

            setDisabled(!isFormValid)
        }

        timer.current = setTimeout(async () => {
            return validateForm().catch(console.error)
        }, 500)
    }

    const onConfirm = () => {
        let values = inputsFields.map(({ ref }) => ref.current.value)
        if (uDAddress) values.push({ type: 'ud' })
        else if (ensAddress) values.push({ type: 'ens' })
        else values.push({ type: 'pub' })
        
        onClose && onClose(values)
        hideModal()
    }

    return (
        <Modal
            size="sm"
            className={styles.wrapper}
            contentClassName={styles.content}
            title={title} 
            buttons={<>
                <Button clear small onClick={hideModal}>Cancel</Button>
                <Button primaryGradient small disabled={isDisabled} onClick={onConfirm}>Confirm</Button>
            </>}
        >
            {
                inputsFields.map(({ id, label, placeholder, ref, type }) => (
                    <div className={styles.inputWrapper} key={id + label}>
                        <TextInput label={label} placeholder={placeholder} onInput={onInput} ref={ref} className={styles.input} />
                        {(type === 'address') &&
                            <>
                                <ToolTip label={!uDAddress ? 'You can use Unstoppable domainsⓇ' : 'Valid Unstoppable domainsⓇ domain'}>
                                    <span className={cn(styles.udomainsLogo, {[styles.active]: uDAddress})} />
                                </ToolTip>
                                <ToolTip label={!ensAddress ? 'You can use Ethereum Name ServiceⓇ' : 'Valid Ethereum Name ServicesⓇ domain'}>
                                    <div className={cn(styles.ensLogo, {[styles.active]: ensAddress})} />
                                </ToolTip>
                            </>
                        }
                    </div>
                ))
            }
        </Modal>
    )
}

export default AddAddressModal
