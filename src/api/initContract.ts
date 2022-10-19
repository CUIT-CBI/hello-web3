
import {ethers} from "ethers"

export default async function (contractAddress: string, contractABI: Array<any>, window: Window & typeof globalThis | any) {
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  await provider.send("eth_requestAccounts", []);
  const signer = provider.getSigner()
  const contract = new ethers.Contract(contractAddress, contractABI, provider)
  const contractSigner = contract.connect(signer)
  return {
    contract,
    contractSigner
  }
}