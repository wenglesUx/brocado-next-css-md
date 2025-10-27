"use client";
import Image from 'next/image';
import Link from 'next/link';
export default function FloatingCard(){
    return(
        <>
        <div className="app-download-modal">
              <div className="app-download-content">
                <p className="app-download-text">
                  <strong>Baixe o app</strong> e comece a <strong>desfrutar</strong> dos <strong>benefícios</strong>
                </p>
                <div className="app-store-buttons">
                  <Link href="/"><Image src="/images/d628eda29dd6dc8d0326a9591dc3119868abc26c.png" alt="Get it on Google Play" width={135} height={44} /></Link> 
                  <Link href="/"><Image src="/images/fc146e4e63ac5b8ee5760b9e6889eebec393dffc.png" alt="Download on the App Store" width={135} height={44} /></Link> 
                </div>
              </div>
        </div>
        </>
    )
}