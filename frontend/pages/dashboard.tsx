import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import type { NextPage } from 'next'
import Navbar from '../components/layout/Navbar'
import Hero from '../components/home/Hero'
import Motivation from '../components/home/Motivation'
import About from '../components/home/About'
import Blog from '../components/home/Blog'
import Footer from '../components/layout/Footer'
import DepositModal from '../components/modal/deposit'
import WithdrawModal from '../components/modal/withdraw'
import RepayModal from '../components/modal/repay'

const assetsToSupplyData = [
  { asset: 'USDT', balance: 0, apy: 2.35 },
  { asset: 'ZENIQ', balance: 0, apy: 16.82 },
  { asset: 'TUPAN', balance: 0, apy: 4.23 },
  { asset: 'EUROC', balance: 0, apy: 1.24 },
  { asset: 'AVINOC', balance: 0, apy: 5.24 },
]

const assetsToBorrowData = [
  { asset: 'USDT', balance: 0, apy: 4.32 },
  { asset: 'zUSD', balance: 0, apy: 3.65 },
  { asset: 'ZENIQ', balance: 0, apy: 17.23 },
  { asset: 'EUROC', balance: 0, apy: 6.94 },
]

const YourSupply = ({ onSwitch, onWithdraw }) => {
  const router = useRouter('')
  const [isDepositModal, setDepositModal] = useState(false)
  const [isWithdrawModal, setWithdrawModal] = useState(false)

  const handleOpenDeposit = () => {
    setDepositModal(true)
  }

  const handleCloseDeposit = () => {
    setDepositModal(false)
  }

  const handleOpenWithdraw = () => {
    setWithdrawModal(true)
  }

  const handleCloseWithdraw = () => {
    setWithdrawModal(false)
  }

  return (
    <>
      <div className="rounded w-5/12 overflow-hidden shadow-lg bg-gray-custom">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Your supplies</div>
        </div>
        <div className="px-6 py-4 flex flex-row">
          <p className=" text-base text-white">Balance $18.43</p>
          <p className="pr-2 pl-2">|</p>
          <p className=" text-base text-white">APY $18.43</p>
        </div>
        <div className="px-6 pt-4 pb-2 flex flex-row content-end">
          <div className=" pt-4 pb-2">
            <div className="inline-block px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
              <div className="flex flex-col">
                <span>Asset</span>
                <span>ETH</span>
              </div>
            </div>
            <div className="inline-block px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
              <div className="flex flex-col">
                <span>BALANCE</span>
                <span>ETH</span>
              </div>
            </div>
            <div className="inline-block px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
              <div className="flex flex-col">
                <span>APY</span>
                <span>ETH</span>
              </div>
            </div>
          </div>

          <div className="px-6 pt-4 pb-2 content-end">
            <button
              onClick={handleOpenDeposit}
              className="ml-2 mr-2 bg-gold hover:bg-gold text-white font-bold py-2 px-4 rounded"
            >
              Supply
            </button>
            <button
              onClick={handleOpenWithdraw}
              className="ml-2 mr-2 bg-transparent hover:bg-white-500 text-white-700 font-semibold hover:text-white py-2 px-4 border border-white-500 hover:border-transparent rounded opacity-50 cursor-not-allowed"
            >
              Withdraw
            </button>
            {/* <button onClick={() => onSwitch()} className="ml-2 mr-2 bg-transparent hover:bg-white-500 text-white-700 font-semibold hover:text-white py-2 px-4 border border-white-500 hover:border-transparent rounded">
                            Switch
                        </button> */}
          </div>

          {isDepositModal && (
            <DepositModal
              isOpen={isDepositModal}
              onClose={handleCloseDeposit}
              vaultName={'BTC Vault - Deposit'}
            ></DepositModal>
          )}

          {isWithdrawModal && (
            <WithdrawModal
              isOpen={isWithdrawModal}
              onClose={handleCloseWithdraw}
              vaultName={'BTC Vault - Withdraw'}
            ></WithdrawModal>
          )}
        </div>
      </div>
    </>
  )
}
const YourBorrow = ({ onRepay, onBorrow }) => {
  const [isRepayModal, setRepayModal] = useState(false)

  const handleOpenRepay = () => {
    setRepayModal(true)
  }

  const handleCloseRepay = () => {
    setRepayModal(false)
  }
  return (
    <>
      <div className="rounded w-6/12 overflow-hidden shadow-lg bg-gray-custom">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Your Borrow</div>
        </div>
        <div className="px-6 py-4 flex flex-row">
          <p className=" text-base text-white">Balance $18.43</p>
          <p className="pr-2 pl-2">|</p>
          <p className=" text-base text-white">APY $18.43</p>
          <p className="pr-2 pl-2">|</p>
          <p className=" text-base text-white">Borrow power used $18.43</p>
        </div>
        <div className="px-6 pt-4 pb-2 flex flex-row content-end">
          <div className=" pt-4 pb-2">
            <div className="inline-block px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
              <div className="flex flex-col">
                <span>Asset</span>
                <span>USDT</span>
              </div>
            </div>
            <div className="inline-block px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
              <div className="flex flex-col">
                <span>BALANCE</span>
                <span>ETH</span>
              </div>
            </div>
            <div className="inline-block px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
              <div className="flex flex-col">
                <span>APY</span>
                <span>ETH</span>
              </div>
            </div>
          </div>

          <div className="px-6 pt-4 pb-2 content-end">
            <button
              onClick={handleOpenRepay}
              className="ml-2 mr-2 bg-gold hover:bg-gold text-white font-bold py-2 px-4 rounded"
            >
              Repay
            </button>
            {/* <button onClick={() => onBorrow()} className="ml-2 mr-2 bg-transparent hover:bg-white-500 text-white-700 font-semibold hover:text-white py-2 px-4 border border-white-500 hover:border-transparent rounded">
                            Borrow
                        </button> */}
          </div>

          {isRepayModal && (
            <RepayModal
              isOpen={isRepayModal}
              onClose={handleCloseRepay}
              vaultName={'BTC Vault - Deposit'}
            ></RepayModal>
          )}
        </div>
      </div>
    </>
  )
}
const AssetsToSupply = ({ onSupply, onDetails }) => {
  return (
    <>
      <div className="rounded w-5/12 overflow-hidden shadow-lg bg-gray-custom">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Assets To Supply</div>
        </div>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-white uppercase">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Asset
                </th>
                <th scope="col" className="px-6 py-3">
                  WALLET BALANCE
                </th>
                <th scope="col" className="px-6 py-3">
                  APY
                </th>
              </tr>
            </thead>
            <tbody>
              {assetsToSupplyData.map((item) => (
                <tr className="border-b">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium whitespace-nowrap"
                  >
                    {item.asset}
                  </th>
                  <td className="px-6 py-4">{item.balance}</td>
                  <td className="px-6 py-4">{item.apy}%</td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => onSupply()}
                      className="ml-2 mr-2 bg-gold hover:bg-gold text-white font-bold py-2 px-4 rounded"
                    >
                      Supply
                    </button>
                    <button
                      onClick={() => onDetails(item.asset)}
                      className="ml-2 mr-2 bg-transparent hover:bg-white-500 text-white-700 font-semibold hover:text-white py-2 px-4 border border-white-500 hover:border-transparent rounded"
                    >
                      Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
const AssetsToBorrow = ({ onDetails }) => {
  return (
    <>
      <div className="rounded w-6/12 overflow-hidden shadow-lg bg-gray-custom">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Assets To Borrow</div>
        </div>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-white uppercase">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Asset
                </th>
                <th scope="col" className="px-6 py-3">
                  available
                </th>
                <th scope="col" className="px-6 py-3">
                  APY, variable
                </th>
                <th scope="col" className="px-6 py-3">
                  APY, STABLE
                </th>
              </tr>
            </thead>
            <tbody>
              {assetsToBorrowData.map((item) => (
                <tr className="border-b">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium whitespace-nowrap"
                  >
                    {item.asset}
                  </th>
                  <td className="px-6 py-4">{item.balance}</td>
                  <td className="px-6 py-4">{item.apy}%</td>
                  <td className="px-6 py-4">-</td>
                  <td className="px-6 py-4">
                    <button className="ml-2 mr-2 bg-gold hover:bg-gold text-white font-bold py-2 px-4 rounded  opacity-50 cursor-not-allowed">
                      Borrow
                    </button>
                    <button
                      onClick={() => onDetails(item.asset)}
                      className="ml-2 mr-2 bg-transparent hover:bg-white-500 text-white-700 font-semibold hover:text-white py-2 px-4 border border-white-500 hover:border-transparent rounded"
                    >
                      Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
const Dashboard: NextPage = () => {
  const onSwitch = () => {
    alert('on switch handle')
  }
  const onDeposit = () => {
    alert('on Deposit handle')
  }
  const onWithdraw = () => {
    alert('on Withdraw handle')
  }
  const onRepay = () => {
    alert('on repay handle')
  }
  const onBorrow = () => {
    alert('on borrow handle')
  }
  const onSupply = () => {
    alert('on supply handle')
  }
  const onDetails = (asset: any) => {
    alert('on details handle: ' + asset)
  }
  return (
    <>
      <Head>
        <title>Palm</title>
        <link rel="icon" href="/image-logo.svg" />
      </Head>
      <Navbar />
      <div className="relative overflow-hidden">
        <section id="hero" className="relative bg-black">
          <div className="container h-screen relative z-20">
            <div className="h-full flex flex-col justify-end mt-10 lg:pb-0 lg:justify-center">
              <div className="flex flex-row justify-around mb-10 text-start text-white white border-white">
                <YourSupply onSwitch={onSwitch} onWithdraw={onWithdraw} />
                <YourBorrow onRepay={onRepay} onBorrow={onBorrow} />
              </div>
              <div className="flex flex-row justify-around mb-10 text-start text-white white border-white">
                <AssetsToSupply
                  onSupply={onSupply}
                  onDetails={(asset) => onDetails(asset)}
                />
                <AssetsToBorrow onDetails={(asset) => onDetails(asset)} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Dashboard
