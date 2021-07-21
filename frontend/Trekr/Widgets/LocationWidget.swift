//
//  LocationWidget.swift
//  Trekr
//
//  Created by Yazeed AlKhalaf on 20/07/2021.
//

import SwiftUI

struct LocationWidget: View {
    let location: Location
    
    var body: some View {
        ZStack() {
            NetworkImageWidget(url: location.heroPicture)
                .cornerRadius(15)
                .padding()
                .overlay(
                    Rectangle()
                        .fill(Color.black)
                        .cornerRadius(15)
                        .padding()
                        .opacity(0.5)
                )
            
            VStack {
                Text(location.name)
                    .font(.largeTitle)
                    .bold()
                    .multilineTextAlignment(.center)
                    .foregroundColor(.white)
                    .padding(.horizontal)
                Text(location.country)
                    .font(.title)
                    .multilineTextAlignment(.center)
                    .foregroundColor(.white)
                    .padding(.horizontal)
            }
        }
    }
}

struct LocationWidget_Previews: PreviewProvider {
    static var previews: some View {
        LocationWidget(location: Location.example)
    }
}
