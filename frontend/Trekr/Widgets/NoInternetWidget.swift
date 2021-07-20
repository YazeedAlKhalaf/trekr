//
//  NoInternetWidget.swift
//  NoInternetWidget
//
//  Created by Yazeed AlKhalaf on 21/07/2021.
//

import SwiftUI

struct NoInternetWidget: View {
    var body: some View {
        VStack {
            Image(systemName: "wifi.slash")
                .font(.system(size: 56))
                .padding(.bottom)
            Text("No Internet 🥲")
                .font(.largeTitle)
            Text("Connect to the internet and the app will work again.")
                .font(.title3)
                .foregroundColor(.secondary)
                .multilineTextAlignment(.center)
                .padding(.horizontal)
        }
    }
}

struct NoInternetWidget_Previews: PreviewProvider {
    static var previews: some View {
        NoInternetWidget()
    }
}
