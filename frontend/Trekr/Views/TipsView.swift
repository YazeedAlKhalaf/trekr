//
//  TipsView.swift
//  Trekr
//
//  Created by Yazeed AlKhalaf on 20/07/2021.
//

import SwiftUI

struct TipsView: View {
    @EnvironmentObject var tipsService: TipsService
    
    var body: some View {
        if !tipsService.gotData {
            ProgressView()
                .navigationTitle("Tips")
        } else {
            List(
                tipsService.tips,
                id: \.text,
                children: \.children
            ) { tip in
                if tip.children != nil {
                    Label(
                        tip.text,
                        systemImage: "quote.bubble"
                    )
                        .font(.headline)
                }
                
                if tip.children == nil {
                    Text(tip.text)
                }
            }
            .navigationTitle("Tips")
        }
    }
}

struct TipsView_Previews: PreviewProvider {
    static var previews: some View {
        TipsView()
    }
}
